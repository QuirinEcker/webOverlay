function hoverOn(numberOfId) {
	let hover = document.getElementsByClassName("actualHover");
	
	hover[numberOfId].style.width = hoverWidth;
}

function hoverOff(numberOfId) {
	let hover = document.getElementsByClassName("actualHover");
	
	hover[numberOfId].style.width = "0"
}