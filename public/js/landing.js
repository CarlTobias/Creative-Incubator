//ANIMATION (TRYING)


ScrollTrigger.create({
    animation: gsap.from(".body", {
        y: "50vh",
        scale: 10,
        yPercent: -50,
    }),
    scrub: true,
    trigger: ".body",
    start: "top bottom",
    endTrigger: ".content",
    end: "top center"
});



// const images = document.querySelectorAll('.left, .right');

// images.forEach(image => {
//     gsap.to(image, {
//         opacity: 1,
//         x: image.classList.contains('left') ? '10%' : '-15%', 
//         scrollTrigger: {
//             scrub: true,
//             trigger: image,
//             start: "top 10%", 
//             toggleActions: "play none none reverse"
//         }
//     });
// });


// gsap.from(".comingSoon h2", {
//     duration:1,
//     opacity: 0,
//     stagger: 0.3,
//     ease: "expo.in",

//     scrollTrigger:{
//         trigger: ".comingSoon",
//         start:"top center",
//         end:"bottom center",
//         toggleActions:"play none none reverse"

//     }
app.listen(3000);