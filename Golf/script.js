var tl = gsap.timeline();

gsap.to(".nav", {
    backgroundColor: "black",
    height: "16vh",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -2",
        scrub: 1
    }
})

gsap.to(".vidCover",  {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".vidCover",
        scroller: "body",
        start: "top -20%",
        scrub: 1
    }
})

gsap.to(".banner", {
    marginTop: "-250px",
    duration: 4,
    opacity: "1",
    scrollTrigger: {
        trigger: ".banner",
        scroller: "body",
        // markers: true,
        start: "top 120%%",
        end: "top 125%",
        scrub: 4
    }
})

