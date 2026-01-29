// Clean function to handle slide changes
function goToSlide(slideNumber) {
    console.log("Moving to slide:", slideNumber); // For debugging
    
    // Hide all slides
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show the specific slide
    const targetSlide = document.getElementById('slide' + slideNumber);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }

    // Logic for the final slide (Slide 6)
    if (slideNumber === 6) {
        setTimeout(() => {
            gsap.to("#theEnd", { opacity: 1, duration: 2 });
        }, 4000);
    }
}

// Interaction Slider
const slider = document.getElementById('loveSlider');
if (slider) {
    slider.addEventListener('input', (e) => {
        const boy = document.getElementById('boySticker');
        const memoriesBtn = document.getElementById('memoriesBtn');
        let val = e.target.value;
        
        // Boy moves towards girl
        let moveX = (val / 100) * 120; 
        boy.style.transform = translateX(${moveX}px);

        if (val == 100) {
            triggerHearts();
            memoriesBtn.style.display = "block";
        }
    });
}

function triggerHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.className = 'heart-fly';
            heart.style.left = '70%'; 
            heart.style.bottom = '150px';
            document.body.appendChild(heart);
            
            gsap.to(heart, {
                y: -250 - Math.random() * 100,
                x: (Math.random() - 0.5) * 200,
                opacity: 0,
                duration: 2.5,
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

// Moon Init
window.onload = () => {
    gsap.from(".moon", { duration: 1.5, scale: 0, opacity: 0, ease: "back.out" });
    gsap.from(".noor-text", { duration: 1, delay: 0.8, opacity: 0, y: 20 });
};
