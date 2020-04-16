var currentActiveSide="left-side";
// SIDES
const aboutSide = document.querySelector(".about-side");
const homeSide = document.querySelector(".left-side");
const navigationSide = document.querySelector(".right-side");
const workSide = document.querySelector(".work-side");
const contactSide = document.querySelector(".contact-side");
// BUTTONS
const homeBTN = document.querySelector('#homeBTN');
const aboutBTN = document.querySelector("#aboutBTN");
const workBTN = document.querySelector("#workBTN");
const contactBTN = document.querySelector("#contactBTN");
let menuBar = document.querySelector("#menuBar")

resetAll();

function resetAll(){
	currentActiveSide="left-side";
	menuBar.style.display = "flex";
	console.log('home');
	hideOne(aboutSide);
	hideOne(workSide);
	hideOne(contactSide);
	showOne(homeSide);
	showOne(navigationSide);
	makeFifty(navigationSide);
	removeThirty(navigationSide);
}

// HOME BUTTON
homeBTN.addEventListener("click", function(){
	currentActiveSide="left-side";
	menuBar.style.display = "flex";
	console.log('home');
	hideOne(aboutSide);
	hideOne(workSide);
	hideOne(contactSide);
	showOne(homeSide);
	showOne(navigationSide);
	makeFifty(navigationSide);
	removeThirty(navigationSide);
});

// MENU BUTTON

menuBar.addEventListener("click", function(){
	menuBar.style.display = "";
	console.log('menu');
	hideOne(aboutSide);
	hideOne(workSide);
	hideOne(contactSide);
	hideOne(homeSide);
	removeHideOnSmall(navigationSide);
	showOne(navigationSide);
	makeFifty(navigationSide);
	removeThirty(navigationSide);
});

// ABOUT BUTTON
aboutBTN.addEventListener("click", function(){
	currentActiveSide="about-side";
	hideOne(homeSide);
	hideOne(contactSide);
	hideOne(workSide);
	hideOnSmall(navigationSide);
	showOne(aboutSide);
	removeFifty(navigationSide);
	removeThirty(navigationSide);
});

workBTN.addEventListener("click", function(){
	currentActiveSide="work-side";
	hideOne(homeSide);
	hideOne(aboutSide);
	hideOne(contactSide);
	hideOnSmall(navigationSide);
	showOne(workSide);
	removeFifty(navigationSide);
	removeThirty(navigationSide);
});

contactBTN.addEventListener("click", function(){
	currentActiveSide="contact-side";
	hideOne(homeSide);
	hideOne(aboutSide);
	hideOne(workSide);
	hideOnSmall(navigationSide);
	showOne(contactSide);
	removeFifty(navigationSide);
	removeThirty(navigationSide);
});



function hideOne(side){
	let classes = side.className.split(" ");
	let i = classes.indexOf("hidden");
	if(i<0){
		classes.push("hidden");
		
	}
	side.className = classes.join(" ");
}
function showOne(side){
	let classes = side.className.split(" ");
	let i = classes.indexOf("hidden");
	if(i>=0){
		classes.splice(i,1);
	}
	side.className = classes.join(" ");
}
function makeFifty(side){
	let classes = side.className.split(" ");
	let i = classes.indexOf("half");
	if(i<=0){
		classes.push("half");
	}
	side.className = classes.join(" ");
}
function removeFifty(side){
	let classes = side.className.split(" ");
	let i = classes.indexOf("half");
	if(i>=0){
		classes.splice(i,1);
	}
	side.className = classes.join(" ");
}

function makeThirty(side){
	let classes = side.className.split(" ");
	let i = classes.indexOf("thirty");
	if(i<0){
		classes.push("thirty");
	}
	side.className = classes.join(" ");
}
function removeThirty(side){
	let classes = side.className.split(" ");
	let i = classes.indexOf("thirty");
	if(i>=0){
		classes.splice(i,1);
	}
	side.className = classes.join(" ");
}

function hideOnSmall(side){
	let classes = side.className.split(" ");
	let i = classes.indexOf("hideOnSmall");
	if(i<0){
		classes.push("hideOnSmall");
		
	}
	side.className = classes.join(" ");
}

function removeHideOnSmall(side){
	let classes = side.className.split(" ");
	let i = classes.indexOf("hideOnSmall");
	if(i>=0){
		classes.splice(i,1);
	}
	side.className = classes.join(" ");
}