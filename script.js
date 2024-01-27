 var crsr =document.querySelector("#cursor")
 var blur =document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.x +"px"
})
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x -150 +"px"
    blur.style.top = dets.x -150 +"px"
})
gsap.to("#nav",{
    backgroundColor :"black",
    height :"110px",
    duration :0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:1

    }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -20%",
        end:"top -80%",
        scrub:1
    }
})
var h4all = document.querySelectorAll("#nav h4")
 h4all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid blue"
        crsr.style.backgroundColor = "transparent"
    })
 })
 gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
 })
 gsap.from(".card",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4
    }
 })
 gsap.from("#page4 h1",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
 })