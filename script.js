button=document.getElementById('button');
videoElement=document.getElementById('video');

async function picture(){

    try{

        const mediastream= await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediastream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
          
    }catch{

    };

}

button.addEventListener('click', async () => {

    button.disabled=true;

    await videoElement.requestPictureInPicture();

    button.disabled=false;



} )

picture();