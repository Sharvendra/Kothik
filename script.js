gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




var tl = gsap.timeline()

tl.from("#nav h1,#nav h4,#nav button",{
    y:-40,
    opacity:0,
    duration:1,
    stagger:0.2
})
tl.from("#page1-content h1,#page1-content p,#page1-content button",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.2
})


gsap.from("#page2>h1",{
    x:-40,
    opacity: 0,
    // duration:,
    scrollTrigger:{
      trigger:"#page2>h1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:2
    }
})
gsap.from(".elem",{
  x:100,
  opacity: 0,
  scrollTrigger:{
    trigger:".elem",
    scroller: "#main",
    // markers:true,
    start:"top 80%",
    end:"top 40%",
    scrub:2
  },
  stagger:0.1

})

gsap.from("#page3>h1",{
  y:30,
  opacity:0,
  scrollTrigger:{
    trigger:"#page3>h1",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 50%",
    scrub:2
  }
})

gsap.from(".o-elem",{
  y:50,
  opacity:0,
  scrollTrigger:{
    trigger:".o-elem",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 60%",
    scrub:2
  },
  stagger:0.2
})

gsap.from("#box-4 h1",{
  x:-30,
  opacity:0,
  scrollTrigger:{
    trigger:"#box-4 h1",
    scroller:"#main",
    // markers:true,
    start:"top 40%",
    end:"top 40%",
    scrub:2
  }
})
gsap.from("#box-4 p",{
  x:30,
  opacity:0,
  scrollTrigger:{
    trigger:"#box-4 p",
    scroller:"#main",
    // markers:true,
    start:"top 40%",
    end:"top 40%",
    scrub:2
  }
})
gsap.from("#img-4",{
  y:50,
  opacity:0,
  scrollTrigger:{
    trigger:"#img-4",
    scroller:"#main",
    // markers:true,
    start:"top 50%",
    end:"top 30%",
    scrub:2
  }
})