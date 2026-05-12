//ADJUST THE SIDEBAR PADDING
var headerAltura = document.querySelector("header").offsetHeight;
var sidebar = document.querySelector("aside");
sidebar.style.paddingTop = 10+headerAltura+"px";

//MAKES THE SIDEBAR APPEAR
const btnHeader = document.getElementById("botaoHeader");

btnHeader.addEventListener("click", function() {
	sidebar.classList.toggle("visivel");
}); 

//CONVERTS VERTICAL SCROLL INTO HORIZONTAL SCROLL
const cards = document.getElementById("containerCards");

cards.addEventListener("wheel", function (evento) {
	if (evento.deltaY !==0) {
		evento.preventDefault();
		cards.scrollLeft += evento.deltaY;
	}
},{passive:false}); //passive false needed cuz if the browsers update ts might stop working otherwise

//same thing but for cardlings
const cardlings = document.querySelectorAll(".containerCardlings");

cardlings.forEach( function(container) {
	container.addEventListener("wheel", function (evento) {		
			if (evento.deltaY !==0) {
				evento.preventDefault();
				container.scrollLeft += evento.deltaY;
			}		
		},{passive:false}); 
	}
)