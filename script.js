// Rotating carousel setup
let angle = 0;
const rotationSpeed = 1; // Adjust the rotation speed as desired
let rotationInterval = setInterval(rotateCarousel, 25); // Adjust the interval speed as desired

function rotateCarousel() {
    angle = (angle + rotationSpeed) % 360;
    const carousel = document.getElementById('carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        const rotation = angle + (index * 360 / items.length);
        item.style.transform = `rotate(${rotation}deg) translateX(50%)`;
        // Apply counter-rotation to all items to keep the text stationary
        item.querySelector('.item-content').style.transform = `rotate(${-rotation}deg)`;
    });
}

document.getElementById('carousel').addEventListener('mouseenter', () => {
    clearInterval(rotationInterval);
});

document.getElementById('carousel').addEventListener('mouseleave', () => {
    rotationInterval = setInterval(rotateCarousel, 25);
});

// Particles.js BG code
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 850
            }
        },
        "color": {
            "value": ["#ffffff", "#aaaaaa"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 5,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 30,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#aaaaaa",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
