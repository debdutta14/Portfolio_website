var tl=gsap.timeline();

tl.from(".home-img",{
    opacity:0,
    scale:0.5,
    duration:1,
})
tl.from(".home-h1",{
    opacity:0,
    x:-100,
    duration:1,
    stagger:0.5
})
tl.from(".home-para",{
    opacity:0,
    scale:0.2,
    duration:0.8,
})
tl.from(".home-btn",{
    opacity:0,
    y:50,
    scale:0.5,
    duration:1,
})