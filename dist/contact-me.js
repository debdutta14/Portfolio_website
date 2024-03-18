var tl=gsap.timeline();

tl.from(".contactme-heading",{
    opacity:0,
    y:-50,
    duration:0.5,
})
tl.from(".contact-h2",{
    opacity:0,
    scale:0.5,
    duration:0.8,
})
tl.from(".contact-detail",{
    opacity:0,
    x:-100,
    duration:0.8,
    stagger:0.5,
})