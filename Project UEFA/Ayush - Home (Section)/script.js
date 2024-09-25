const videos = document.querySelectorAll('.hoverVideo');

videos.forEach(video => {
    video.pause();

    video.addEventListener('mouseenter', function() {
        video.play();
    });

    video.addEventListener('mouseleave', function() {
        video.pause();
    });
});