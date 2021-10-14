// FULL PAGE JS STUFF -----------------------------------------------------------

new fullpage('#fullpage', {
	//navigation
    menu: '#menu',
	lockAnchors: false,
	anchors:['landing', 'break', 'creec', 'ant-ex', 'eotw', 'about',  'contact'],
	navigation: true,
	navigationPosition: 'left',
	showActiveTooltip: false,
	autoScrolling: true,
	loopBottom: true,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#nav, .footer',

	afterRender: function() {
		
		let landingTL = gsap.timeline({ defaults: {duration: 0.5, ease: "power1.out",  opacity: 0 }})

		landingTL
			.from("#nav", { y:-30, delay: 0.5 })
			.from(".hero-copy", { y:30 })
			.from("#fp-nav", { x:-30 })
			.from(".footer", { y:30 })

	},

	// Animations
	onLeave: function(origin, destination, direction){
		var loadedSection = this;

		// Down
		if(destination.anchor == 'break' && direction === 'down'){
			gsap.from(".anim-in-1", {duration: 1, y: 100, stagger: 0.1});
		}  else if(destination.anchor == 'creec' && direction === 'down'){
			gsap.from(".anim-in-2", {duration: 1, y: 100, stagger: 0.1});
		} else if(destination.anchor == 'ant-ex' && direction === 'down'){
			gsap.from(".anim-in-3", {duration: 1, y: 100, stagger: 0.1});
		} else if(destination.anchor == 'eotw' && direction === 'down'){
			gsap.from(".anim-in-4", {duration: 1, y: 100, stagger: 0.1});
		} else if(destination.anchor == 'about' && direction === 'down'){
			gsap.from(".anim-in-5", {duration: 1, y: 100, stagger: 0.1});
		} else if(destination.anchor == 'contact' && direction === 'down'){
			gsap.from(".anim-in-6", {duration: 1, y: 100, stagger: 0.1});
		}
		// Up
		if(destination.anchor == 'break' && direction === 'up'){
			gsap.from(".anim-in-1", {duration: 1, y: -100, stagger: 0.1});
		} else if(destination.anchor == 'creec' && direction === 'up'){
			gsap.from(".anim-in-2", {duration: 1, y: -100, stagger: 0.1});
		} else if(destination.anchor == 'ant-ex' && direction === 'up'){
			gsap.from(".anim-in-3", {duration: 1, y: -100, stagger: 0.1});
		} else if(destination.anchor == 'eotw' && direction === 'up'){
			gsap.from(".anim-in-4", {duration: 1, y: -100, stagger: 0.1});
		} else if(destination.anchor == 'about' && direction === 'up'){
			gsap.from(".anim-in-5", {duration: 1, y: -100, stagger: 0.1});
		} else if(destination.anchor == 'contact' && direction === 'up'){
			gsap.from(".anim-in-6", {duration: 1, y: -100, stagger: 0.1});
		} else if(destination.anchor == 'landing' && direction === 'up'){
			gsap.from(".anim-in-7", {duration: 1, y: -100, stagger: 0.1});
		}

		if(origin.index === 2 && direction === 'down'){
			scrollBtn.classList.add("rotated")
		} else {
			scrollBtn.classList.remove("rotated")
		}
	}


});

//methods
fullpage_api.setAllowScrolling(true);

let scrollBtn = document.querySelector(".scroll-cta")

scrollBtn.addEventListener('click', ()=> {
	fullpage_api.moveSectionDown();
})



const circle = document.getElementById("mouse-circle")
const real = document.querySelector('.real')


function mouseFollow(event){
   //custom cursor bit
   circle.style.left = event.pageX + "px"
   circle.style.top = event.pageY + "px"

   // homepage text hover bit
   var rXP = (event.pageX - real.offsetLeft - real.offsetWidth /2)
   var rYP = (event.pageY - real.offsetTop - real.offsetHeight /2)

   real.style.textShadow = rYP/20+'px '+rXP/160+'px rgba(227,6,19,.3), '+rYP/16+'px '+rXP/120+'px rgba(255,237,0,0.3), '+rXP/140+'px '+rYP/24+'px rgba(0,159,227,0.3)'
}

document.addEventListener("mousemove", mouseFollow, false)