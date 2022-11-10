var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play();
})
.catch(error => {
    console.log(error);
});

var link = document.createElement('a')

document.querySelector('button').addEventListener('click', () => {
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    var context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)   
    link.download = 'foto.png';
    link.href = canvas.toDataURL()
    document.body.appendChild(link)
    link.textContent = 'Clique para baixar a imagem'
    });

   
    
    

   
