const tl = gsap.timeline();

// tl.from(".nav", {
//     opacity: 0,
//     duration: 0.5,
//     delay: 0.5
// })

tl.from("h2, h3, .nav",{
    y: -100,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    delay: 0.5
})

tl.from(".leftMain", {
    opacity: 0,
    duration: 0.3
})

tl.from(".page1 h1, .headingImages, h4", {
    x: -200,
    opacity: 0,
    duration: 0.8
})

tl.from("#rightImage, .dots", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5
})

tl.from(".rt", {
    opacity: 0,
    duration: 0.5
})

gsap.from(".page2", {
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        scrub: 2,
    }
})

gsap.from(".twoHeading", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
        trigger: ".twoHeading",
        scroller: "body",
        end: "top 10%",
        scrub: 2,
    }
})