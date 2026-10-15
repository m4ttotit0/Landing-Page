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

//Giro + animación de salida aka. se vuelve transparente
window.addEventListener("scroll", () => {
    const audifonos = document.getElementById("rotacion");

    if (audifonos) {
		const s = window.scrollY;
    
		const alturaMax = document.documentElement.scrollHeight - window.innerHeight;
        const progreso = alturaMax > 0 ? s / alturaMax : 0;
        const grados = progreso * 360;
		let opacidad = 1;
        if (s > 150) {
            opacidad = Math.max(0, 1 - (s - 150) / 300);
        }

        audifonos.style.transform = `rotate(${grados}deg)`;
		audifonos.style.opacity = opacidad;
    }
});
