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

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);          

  const sections = gsap.utils.toArray(".fleftelem");  

  Shery.imageEffect(".images", {
    style: 4,                                   
    slideStyle: (setScroll) => {
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${section.offsetHeight}`, 
          scrub: 1,
          onUpdate: (self) => setScroll(index + self.progress)
        });
      });
    }
  });
});
