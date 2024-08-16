// First timeline with ScrollTrigger
// GSAP timeline for the ".two" section
  gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "50% 90%",  // Start trigger point
        end: "50% 40%",    // End trigger point
        scrub: 10,       // Ties animation to the scroll position
        //markers: true,     // Optional: Shows markers for debugging
    }
})
.to("#fantaMain", {
    top: "125%",
    left: "5%"
}, "orange")
.to("#slice", {
    top: "115%",
    left: "29%"
}, "orange")
.to("#orange", {
    top: "164%",
    right: "2%"
}, "orange");

  

// GSAP timeline for the ".three" section
  gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "10% 70%",    // Start trigger point
        end: "30% -10%",   // End trigger point
        scrub: true,       // Ties animation to the scroll position
       // markers: true,     // Optional: Shows markers for debugging
    }
})
.to("#fantaMain",{
    top:"231%",
     left: "10%",
     width:"20%"
    } );
.to(".sliceMang", {
    left: "150%"
},"pepsi")
.to("#pepsi",{
    left:"156%"
},"pepsi");
