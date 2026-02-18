// Initialize Smooth Scrolling (Lenis)
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(follower, { x: e.clientX - 16, y: e.clientY - 16, duration: 0.3 });
});

// Horizontal Scroll Animation
const horizontalSection = document.querySelector('.horizontal-scroll');
const pinWrap = document.querySelector('.pin-wrap');
const animationWrap = document.querySelector('.animation-wrap');

let scrollWidth = animationWrap.offsetWidth - window.innerWidth + (window.innerWidth * 0.2);

gsap.to(animationWrap, {
    scrollTrigger: {
        trigger: horizontalSection,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1
    },
    x: -scrollWidth,
    ease: "none"
});

// Parallax Effect for Hero Image
gsap.to(".hero-bg", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: true
    },
    y: 100,
    ease: "none"
});

// Text Reveal Animations (Fade Up)
const revealElements = document.querySelectorAll('.reveal-text, .fade-up');
revealElements.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    });
});

// Image Mask/Scale Effects for Gallery Items
const items = document.querySelectorAll('.item-inner');
items.forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            containerAnimation: gsap.getById("horizontalScroll"), // If linked to horizontal
            start: "left center",
        },
        scale: 0.8,
        opacity: 0.5,
        duration: 1
    });
});


// 1. Mandatory Registration
gsap.registerPlugin(ScrollTrigger);

let proxy = { skew: 0 },
    // 2. High-performance setter
    skewSetter = gsap.quickSetter(".item, .hero-image-container", "skewY", "deg"),
    clamp = gsap.utils.clamp(-20, 20); 

ScrollTrigger.create({
  onUpdate: (self) => {
    // 3. Calculate skew based on scroll velocity
    let skew = clamp(self.getVelocity() / -300);
    
    // 4. Smoothly animate the proxy object's skew property
    gsap.to(proxy, {
      skew: skew, 
      duration: 0.5, 
      ease: "power3", 
      overwrite: true, 
      onUpdate: () => skewSetter(proxy.skew)
    });
  }
});

// 5. Ensure elements return to 0 when scrolling stops
ScrollTrigger.create({
  onToggle: self => {
    if (!self.isActive) {
      gsap.to(proxy, { skew: 0, duration: 0.5, ease: "power3", onUpdate: () => skewSetter(0) });
    }
  }
});

// Set transform origin for a cleaner 'warp' effect
gsap.set(".item, .hero-image-container", { transformOrigin: "center center", force3D: true });
gsap.utils.toArray(".item").forEach(item => {
  gsap.to(item, {
    skewY: 5, // Subtle skew
    scrollTrigger: {
      trigger: item,
      scrub: 1, // Ties animation directly to scroll progress
      start: "top bottom",
      end: "bottom top",
    }
  });
});

// Vertical Gallery Fade In
gsap.utils.toArray('.gallery-item').forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
});

// Parallax for the project hero image
gsap.to(".hero-image-full img", {
    scrollTrigger: {
        trigger: ".project-hero",
        start: "top top",
        scrub: true
    },
    y: 200,
    ease: "none"
});

// Vertical Gallery Fade In
gsap.utils.toArray('.gallery-item').forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
});

// Parallax for the project hero image
gsap.to(".hero-image-full img", {
    scrollTrigger: {
        trigger: ".project-hero",
        start: "top top",
        scrub: true
    },
    y: 200,
    ease: "none"
});

// Vertical Gallery Fade In
gsap.utils.toArray('.gallery-item').forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
});

// Parallax for the project hero image
gsap.to(".hero-image-full img", {
    scrollTrigger: {
        trigger: ".project-hero",
        start: "top top",
        scrub: true
    },
    y: 200,
    ease: "none"
});

// Vertical Gallery Fade In
gsap.utils.toArray('.gallery-item').forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
});

// Parallax for the project hero image
gsap.to(".hero-image-full img", {
    scrollTrigger: {
        trigger: ".project-hero",
        start: "top top",
        scrub: true
    },
    y: 200,
    ease: "none"
});

// Vertical Gallery Fade In
gsap.utils.toArray('.gallery-item').forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
});

// Parallax for the project hero image
gsap.to(".hero-image-full img", {
    scrollTrigger: {
        trigger: ".project-hero",
        start: "top top",
        scrub: true
    },
    y: 200,
    ease: "none"
});