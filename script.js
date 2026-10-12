document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener("click", (e) => {
		crearOnda(e.clientX, e.clientY);
	});
	
	function crearOnda(x,y) {
		const onda = document.createElement("div");
		onda.classList.add("click-effect");
		onda.style.left = `${x}px`;
		onda.style.top = `${y}px`;
		document.body.appendChild(onda);

		setTimeout(() => {
			onda.remove();
		}, 600);		
	}

});
