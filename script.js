var tl = gsap.timeline()



tl.from("#nav",{

    opacity: 0,
   delay: .3,


})

tl.from("#nav h1,#nav h4",{

    y: -80,
    opacity:0,
    duration:.3,
    stagger: .3,
    
   
})
tl.from("#left h1",{
    x : -500,
    opacity:0,
    duration:1,
    stagger : .3,



})
tl.from("#right img",{
    scale:.5,
    opacity:0,
    duration:.5,
})
gsap.from("#page2 .box",{
    scale : 0,
    opacity: 0,
    duration:.5,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroll:"body",
        start:"top 70%",


    }
})
