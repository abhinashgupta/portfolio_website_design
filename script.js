function reavealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
    //create two spans
    var parent=document.createElement("span");
    var child=document.createElement("span");

    //parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");
    // <span class="parent"></span>
    // <span class="child"></span>

    //span parent gets shild and child gets elem details
    child.innerHTML = elem.innerHTML;       
    parent.appendChild(child);

    //elem replaces its value with parent span
    elem.innerHTML="";
    elem.appendChild(parent);
})
}


function valueSetters(){
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home .parent .child" , {y: "100%"});
    gsap.set("#home .row img",{opacity: 0})

    document.querySelectorAll("#Visual>g").forEach(function (e){
        var character = e.childNodes[0].childNodes[0];

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}


function loaderAnimation(){
    var t1 = gsap.timeline();

t1.from("#loader .child span", {
  x: 100,
  delay: 1,
  stagger: 0.1,
  duration: .6,
  ease: Power3.easeInout,
})
  .to("#loader .parent .child", {
    y: "-100%",
    duration: .4,
    delay: .2,
    ease: Circ.easeInout,
  })

  .to("#loader", {
    height: 0,
    duration: .5,
    ease: Circ.easeInout,
  })
  .to("#green", {
    height: "100%",
    top: 0,
    delay: -0.8,
    duration: 1,
    ease: Circ.easeInout,
  })
  .to("#green", {
    height: "0%",
    duration: 1,
    delay: -0.5,
    ease: Circ.easeInout,
    onComplete: function () {
      animateHomepage();
    },
  })
}

function animateHomepage(){
  

    var tl= gsap.timeline();
    tl.to("#nav a", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: Expo.easeInout,
    })
      .to("#home .parent .child", {
        y: 0,
        stagger: 0.2,
        duration: .6,
        ease: Expo.easeInout,
      })
      .to(
        "#home .row img",
        {
          opacity: 1,
          delay: -0.5,
          ease: Expo.easeInout,
          onComplete: function () {
            animateSvg();
          },
        })
}


function animateSvg(){
       

       gsap.to("#Visual>g>g>path, #Visual>g>g>polyline" , {
          strokeDashoffset: 0,
          duration:1.5,
          ease:Expo.easeInout,
       })
}

function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardHoverEffect(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showingImage;
        cnt.addEventListener("mousemove" , function(dets){
        document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
        showingImage=dets.target;
        document.querySelector("#cursor").children[dets.target.dataset.index].style.transform= `translate(${dets.clientX}px, ${dets.clientY}px)`;
        showingImage.style.filter="grayscale(1)";

        // document.querySelector("#work").style.backgroundColor ="#" + dets.target.dataset.color;
        
        })
        
        cnt.addEventListener("mouseleave" , function(dets){
        document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity=0;
        showingImage.style.filter="grayscale(0)";

        // document.querySelector("#work").style.backgroundColor ="#fff";
        })
    })
}


reavealToSpan();
valueSetters(); 
loaderAnimation();
locoInitialize();

cardHoverEffect();


// gsap.from("g,path", {
//     strokeDasharray:135.63333129882812  ,
//     strokeDashOffset:135.63333129882812,
//     duration: 1,
//     ease: Power3
// })