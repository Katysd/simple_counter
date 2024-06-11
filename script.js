
zm = 0;

state = false;

setInterval(zmbe, 1000);

function zmbe() {
	
	if (state == true) {
		zm += 1;
		var segundos = zm; // Aquí iría tu variable que aumenta cada segundo
		var horas = Math.floor(segundos / 3600);
		var minutos = Math.floor((segundos % 3600) / 60);
		var seg = segundos % 60;
		var horasStr = (horas < 10) ? "0" + horas : horas;
		var minutosStr = (minutos < 10) ? "0" + minutos : minutos;
		var segStr = (seg < 10) ? "0" + seg : seg;
		tim.textContent = horasStr + ":" + minutosStr + ":" + segStr;
		document.title = tim.textContent;
	}
	
}

function dope() {
	if (state == false) {
		state = true;
		change.textContent = "Stop"
	} else {
		state = false;
		change.textContent = "Start"
	}
}

restval = 0;

function rest() {
	if (restval == 0) {
		restval++
		res.textContent = "Are you sure?"
	} else if (restval == 1) {
		res.textContent = "Reset"
		restval = 0;
		truerest();
	}
}

function truerest() {
	if (state == true) {
		dope();
	}
	zm = 0;
	tim.textContent = "00:00:00";
	document.title = tim.textContent;
}

function lap() {
	
	var segundos = zm; // Aquí iría tu variable que aumenta cada segundo
	var horas = Math.floor(segundos / 3600);
	var minutos = Math.floor((segundos % 3600) / 60);
	var seg = segundos % 60;
	var horasStr = (horas < 10) ? "0" + horas : horas;
	var minutosStr = (minutos < 10) ? "0" + minutos : minutos;
	var segStr = (seg < 10) ? "0" + seg : seg;
	
	var childElement = document.createElement('div');
	childElement.className = 'lape';
	var texto = document.createTextNode(horasStr + ":" + minutosStr + ":" + segStr);
	childElement.appendChild(texto);
	lapper.appendChild(childElement);
}















