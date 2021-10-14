const openingTL = gsap.timeline({ defaults: {duration: 0.3, ease: "power1.out",  opacity: 0 }});

openingTL
    .from(".hero-img", { y:-30 })
    .from(".heading", { y: 30 })
    .from(".content-1", { y: 30 })
    .from(".back", { y: -30});


    
const circle = document.getElementById("mouse-circle")
const real = document.querySelector('.real')
const card = document.getElementById('card')
const hoverTarget = document.querySelector('.hover-target')

function mouseFollow(event){
   //custom cursor
   circle.style.left = event.pageX + "px"
   circle.style.top = event.pageY + "px"
}

// function cardHover(event){
//    // 3d card hover
//    let ax = -(window.innerWidth/2 - event.pageX)/20
//    let ay = (window.innerHeight/2 - event.pageY)/10

//    card.style.transform = 'rotate('+ax+'deg) rotateX('+ay+'deg)'
// }

// hoverTarget.addEventListener("mousemove", cardHover, false)
