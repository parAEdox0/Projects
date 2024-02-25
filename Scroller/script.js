gsap.to(".page1 h1", {
    transform: "translateX(-29%)",
    // duration: 1,
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        markers: true,
        start: "top -1",
        end: "top -100%",
        scrub: 3,
        pin: true,
    }
})