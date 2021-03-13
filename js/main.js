TweenMax.to(".loade", 2, {
  top: "-100%",
  ease: Expo.easeInOut,
  delay: 3.6
});

var timeline = new TimelineMax()

timeline.from(".loader", 1.6, {
  scaleY: "0%",
  y: 80,
  ease: Expo.easeInOut,
  delay: 1,
  transformOrigin:"50% 100%",
  opacity:0,
});

timeline.to(".loader", 1.6, {
  height: "20vh",
  scaleY: "0%",
  ease: Expo.easeInOut,
  transformOrigin:"0% -100%"
});

timeline.staggerFrom("nav > .hover-this",1.6,{ 
  y:50,
  delay:1,
  opacity:0,
  ease:Expo.easeInOut,
},0.2);

timeline.staggerFrom(".line",2,{ 
  y:50,
  opacity:0,
  ease:Expo.easeInOut,
},0.7);
timeline.to('.header-box',2.4,{
  x:"100%",
  delay:-4.4,  
  ease:Expo.easeInOut
});
timeline.from(".header-imgBg",1.6,{
  delay:-3,
  scale:1.6,
  ease:Power2.easeInOut
})

/**/
let parent = document.querySelectorAll("[data-collapse]");
parent.forEach((element) => {
  let clickTarget = element.querySelector("*");
  let collapseElement = element.nextElementSibling;
  let collapseElementChildren = collapseElement.children;
  let tl = new TimelineMax({
    reversed: true,
    paused: true,
  });

  tl.from(
    collapseElement,
    1.2,
    {
      className: "+=heightZero",
      ease: Expo.easeInOut,
    },
    "open"
  );
  tl.staggerFrom(
    collapseElementChildren,
    1,
    {
      autoAlpha: 0,
      y: "40%",
      ease: Expo.easeInOut,
    },
   0.08,
    "open+=.1"
  );

  clickTarget.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
  });
});
