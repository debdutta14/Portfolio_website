var tl=gsap.timeline();

tl.from(".additional-heading",{
    opacity:0,
    y:-50,
    duration:0.5,
})
tl.from(".internship",{
    opacity:0,
    x:-50,
    duration:0.5,
    stagger:0.5,
})
tl.from(".coding",{
    opacity:0,
    scale:0.5,
    duration:0.5,
    scrollTrigger:{
        trigger:".coding",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 80%",
        scrub:3,
    }
})
tl.from(".certificate",{
    opacity:0,
    x:-50,
    duration:0.5,
    scrollTrigger:{
        trigger:".certificate",
        scroll:"body",
        scrub:3,
        // markers:true,
        start:"top 70%",
        end:"top 80%",

    }
})