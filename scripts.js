function playVideo() {
    const thumbnail = document.getElementById('video-thumbnail');
    const playButton = document.querySelector('.play-button');
    const video = document.getElementById('video');

    thumbnail.style.display = 'none';
    playButton.style.display = 'none';
    video.style.display = 'block';
    video.play();
}



function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}