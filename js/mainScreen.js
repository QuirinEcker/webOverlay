var hoverWidth = "49.9%"

function buttonPress() {
	alignButtons();
}

function alignButtons() {
	let main = document.getElementById("main");
	let img = document.getElementById("images");
	let link = document.getElementById("Verlinkung");
	let hover = document.getElementById("hover");
	
	let classMain = document.getElementsByClassName("point");
	let classImg = document.getElementsByClassName("image");
	let classLinks = document.getElementsByClassName("links");
	let classHover = document.getElementsByClassName("hover");
	let classActualHover = document.getElementsByClassName("actualHover");
	
	let all = [main, img, link, hover];
	let classAll = [classMain, classImg, classLinks, classHover, classActualHover];
	let images = document.getElementsByClassName("img");
	
	for (let i = 0; i < all.length; i++) {
		all[i].style.flexDirection = "column";
		all[i].style.justifyContent = "flex-start";
		for (let x = 0; x < images.length; x++) {
			images[x].style.width = "100px";
			images[x].style.height = "100px";
		}
	}
	
	for (let i = 0; i < classAll.length; i++) {
		for (let x = 0; x < classAll[i].length; x++) {
			classAll[i][x].style.transition = "1s all";
			if(i == 4) {
				classAll[i][x].style.height = "20%";
				classAll[i][x].style.width = "0";
			} else {
				classAll[i][x].style.height = "20%";
				classAll[i][x].style.width = "25%";
			}
			hoverWidth = "25%";
		}
	}
}