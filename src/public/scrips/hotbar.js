
let dragstart = null;
let offset = {x: 0, y: 0};

document.addEventListener("mousemove", (e) => {
	if (!dragstart) return;
	hotbar.style.transform = `translateX(${e.clientX - dragstart.x + offset.x}px) translateY(${e.clientY - dragstart.y + offset.y}px)`;
});

hotbar.addEventListener('click', function (e) {
	if (e.target.className != "hotbarIn") return;
    if (e.detail == 1) {
    	if (dragstart) {
    		offset = {
    			x: offset.x + (e.clientX - dragstart.x),
    			y: offset.y + (e.clientY - dragstart.y)
    		};
			dragstart = null;
    	}
    	else {
			dragstart = {x: e.clientX, y: e.clientY};
    	}
    }
    else {
    	hotbar.style.display = "none";
	    hotbar.classList.remove('hotbarIn');
	    arrowTop.style.display = "flex";
    }
});
