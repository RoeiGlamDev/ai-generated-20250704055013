// Get the hero video and thumbnail elements
const heroVideo = document.getElementById('hero-video');
const heroThumbnail = document.querySelector('.hero-thumbnail');

// Add event listener to the hero video
heroVideo.addEventListener('loadeddata', () => {
    // Fade in the hero thumbnail
    heroThumbnail.classList.add('fade-in');
});

// Get the video cards
const videoCards = document.querySelectorAll('.video-card');

// Add event listener to the video cards
videoCards.forEach((videoCard) => {
    videoCard.addEventListener('mouseover', () => {
        // Add fade-in animation to the video thumbnail
        videoCard.querySelector('.video-thumbnail').classList.add('fade-in');
    });

    videoCard.addEventListener('mouseout', () => {
        // Remove fade-in animation from the video thumbnail
        videoCard.querySelector('.video-thumbnail').classList.remove('fade-in');
    });
});