var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");

document.body.addEventListener("mouseover", (e) => {
    cursor.style.left = `${e.x}px`;
    cursor.style.top = `${e.y}px`;
});


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

gsap.from(".banner", {
    opacity: "0",
    marginTop: "150px",
    duration: 2,
    scrollTrigger: {
        trigger: ".banner",
        scroller: "body",
        scrub: 2,
        start: "top 100%",
        end: "top 80%%"
    }
})

tl.from("#btOne, #btTwo, #btThree", {
    marginTop: "100",
    scale: "0.7",
    duration: 0.5,
    stagger: "0.1",
    scrollTrigger: {
        trigger: "#btOne, #btTwo, #btThree",
        scroller: "body",
        scrub: 5,
        start: "top 110%",
        end: "top 100%"
    }
})

tl.to("#bfOne", {
    top: "-80px",
    left: "-80px",
    scrollTrigger: {
        trigger: "#bfOne",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 5
    }
})

tl.to("#bfTwo", {
    bottom: "-60px",
    right: "-60px",
    scrollTrigger: {
        trigger: "#bfOne",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 5
    }
})

tl.to(".bannerFive h2", {
    top: "-70px",
    scrollTrigger: {
        trigger: ".bannerFive h2",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 80%",
        scrub: 2
    }
})
