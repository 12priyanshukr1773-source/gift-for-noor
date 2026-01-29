// Function to switch slides
function nextSlide(currentNum) {
    const current = document.getElementById('slide' + currentNum);
    const next = document.getElementById('slide' + (currentNum + 1));
    
    if (next) {
        current.classList.remove('active');
        next.classList.add('active');
        
        // Specific logic for the last slide
        if (currentNum + 1 === 6) {
            setTimeout(() => {
                gsap.to("#theEnd", { opacity: 1, duration: 2 });
            }, 4000);
        }
    }
}

// Interaction Slider
const slider = document.getElementById('loveSlider');
const boy = document.getElementById('boySticker');
const heartContainer = document.getElementById('heartContainer');
const memoriesBtn = document.getElementById('memoriesBtn');

slider.addEventListener('input', (e) => {
    let val = e.target.value;
    // Movement range adjust (boy moves towards girl)
    let moveX = (val / 100) * 120; 
    boy.style.transform = translateX(${moveX}px);

    if (val == 100) {
        triggerHearts();
        memoriesBtn.style.display = "block";
    }
});

function triggerHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.className = 'heart-fly';
            heart.style.left = '70%'; 
            heart.style.bottom = '100px';
            document.body.appendChild(heart);
            
            gsap.to(heart, {
                y: -200 - Math.random() * 100,
                x: (Math.random() - 0.5) * 150,
                opacity: 0,
                duration: 2,
                onComplete: () => heart.remove()
            });
        }, i * 150);
    }
}

// Gallery Functions
function openPhoto(src) {
    const viewer = document.getElementById('photoViewer');
    const fullImg = document.getElementById('fullPhoto');
    fullImg.src = src;
    viewer.style.display = 'flex';
}

function closePhoto() {
    document.getElementById('photoViewer').style.display = 'none';
}

// Initial Animation
window.onload = () => {
    gsap.from(".moon", { duration: 1.5, scale: 0, opacity: 0, ease: "back.out" });
    gsap.from(".noor-text", { duration: 1, delay: 0.8, opacity: 0, y: 20 });
};