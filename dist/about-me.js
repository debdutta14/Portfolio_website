var tl=gsap.timeline();

tl.from(".about-heading",{
    opacity:0,
    y:-50,
    duration:0.5,
})
tl.from(".about-info",{
    opacity:0,
    x:-50,
    duration:0.5,
})
tl.from(".about-img",{
    opacity:0,
    x:-50,
    duration:1,
})
tl.from(".about-detail,.about-btn",{
    opacity:0,
    scale:0.7,
    duration:0.8,
    stagger:0.5,
})
tl.from(".about-skill,.about-dash",{
    opacity:0,
    scale:0.5,
    duration:0.8,
    stagger:0.7,
    scrollTrigger:{
        trigger:".about-skill",
        scroll:"body",
        scrub:3,
        // markers:true,
        start:"top 80%",
        end:"top 60%",
    }
})
tl.from(".skill-h2",{
    x:-50,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".skill-h2",
        scroll:"body",
        // markers:true,
        start:"top 90%",
        end:"top 98%",
        
        scrub:3,
    }
})
tl.from(".all-skills",{
    opacity:0,
    scale:0.4,
    duration:0.8,
    scrollTrigger:{
        trigger:".all-skills",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 90%",
        end:"top 98%"
    }
})
tl.from(".schools",{
    x:-50,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".schools",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 98%",
        scrub:3,
    }
})