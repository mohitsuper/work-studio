const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

function LoaderAnimtion(){
    const tl = gsap.timeline()

    tl.to("#yellow1",{
        top:"-100%",
        delay:0.2,
        duration:0.1,
        ease:"expo.out",
    })
    tl.to("#loader video",{
        top:"-100%",
        delay:0.6,
        duration:0.3,
        ease:"expo.out",
    })
    tl.to("#loader",{
        top:"-100%",
        duration:0,
        ease:Power3,
    
        
    })
    
    tl.from("#yellow2",{
      top:"0%"
    },'anime')
    
    tl.to("#loader h1",{
        color:"black",
    },"anime")
    
    tl.to("#loader",{
        delay:1.5,
        display:"none",  
    })    
}

function ElemPage(){
  let elem = document.querySelectorAll(".elem")
  elem.forEach((item)=>{
      item.addEventListener("mouseenter",function(){
       let image = item.getAttribute("data-image")
       console.log(image)
       let pageText = document.querySelector(".page2-text")
        console.log(pageText)
    
    pageText.style.backgroundImage = `url(${image})`

    })
    item.addEventListener("mouseleave",function(){
        let pageText = document.querySelector(".page2-text")
        pageText.style.background = "#000"
    })
  })
}

// let divElements = document.querySelectorAll("#moving")
// let currentDiv = 0;
// let elem = document.querySelectorAll(".elem")

  
//   function showNextDiv() {
//     divElements[currentDiv].style.transform = 'scaleY(0)';
//     currentDiv++;
  
//     if (currentDiv >= divElements.length) {
//       currentDiv = 0;
//     }
  
//     divElements[currentDiv].style.transform = 'scaleY(1)';
//   }
  
//   elem.forEach(div => {
//     div.addEventListener('mouseenter', () => {
//       divElements.forEach(div => div.style.transform = 'scaleY(0)');
//     });
//     // showNextDiv()
//     div.addEventListener('mouseleave', () => {
//       showNextDiv();
//     //   alert()
//     });
//   });

let BottomToTop = ()=>{
   document.querySelector(".page3-bottom").addEventListener("click",()=>{
    scroll.scrollTo(0)
   })
   let BottmMove = document.querySelectorAll(".bottom-move")
   BottmMove[0].addEventListener("click",()=>{
    scroll.scrollTo(800)})
    BottmMove[1].addEventListener("click",()=>{
        scroll.scrollTo(1200)})
}

BottomToTop()

ElemPage()
LoaderAnimtion()
  