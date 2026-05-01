// Music control
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<span class="music-icon">🎵</span><span class="music-text">Bật nhạc</span>';
        isPlaying = false;
    } else {
        backgroundMusic.play().catch(e => {
            console.log('Trình duyệt chặn autoplay, click để bật nhạc');
        });
        musicToggle.innerHTML = '<span class="music-icon">⏸️</span><span class="music-text">Tắt nhạc</span>';
        isPlaying = true;
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer cho hiệu ứng lazy load
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe tất cả photo items
document.querySelectorAll('.photo-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Preload nhạc sau 1s
setTimeout(() => {
    backgroundMusic.load();
}, 1000);