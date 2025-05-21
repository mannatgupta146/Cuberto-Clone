Shery.mouseFollower();
Shery.makeMagnet(".magnet, .logo");
Shery.hoverWithMediaCircle(".hvr",{videos: ["./a.mp4", "./b.mp4", "./c.mp4"]});

gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",   
        endTrigger: ".last",
        scrub: 1
    },
y: "-300%",
ease: Power1
})