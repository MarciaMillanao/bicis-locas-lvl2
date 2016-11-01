function validateForm(){
	var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

	function name(){//valida nombre
		var nombre = document.getElementById('name').value;
		if(nombre.length === 0 || nombre === null){
			var agregar = document.getElementsByClassName('name-container')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Debe ingresar su nombre'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("ingrese nombre");
			return false;
		}else if(!soloLetras.test(nombre)){
			var agregar = document.getElementsByClassName('name-container')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Ingrese solo letras en el nombre'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("ingrese solo letras");
			return false;
		}else if(nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
			var agregar = document.getElementsByClassName('name-container')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Ingrese inicial de nombre con mayuscula'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("ingrese inicial con mayuscula");
			return false;
		}else{
			//alert("nombre correcto");
			return true;
		}
	}
	name();

	//validacr apellido
	function apellido(){
		var apellido = document.getElementById('lastname').value;
		if(apellido.length === 0 || apellido === null){ //valida que se ingrese correo
			var agregar = document.getElementsByClassName('lastname-container')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Debe ingresar su apellido'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("Ingrese Apellido");
			return false;
		}else if (!soloLetras.test(apellido)){
			var agregar = document.getElementsByClassName('lastname-container')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Ingrese solo letras en el apellido'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("ingrese solo letras");
			return false;	
		}else if(apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){
			var agregar = document.getElementsByClassName('lastname-container')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Ingrese inicial de apellido con mayuscula'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("ingrese inicial con mayuscula");
			return false;
		}else{
			//alert(apellido ingresado correctamente);
			return true;
		}
	}
	apellido()

	//validar correo
	function correo(){
		var email = document.getElementById('input-email').value;
		if(email.length === 0 || email === null){ //valida que se ingrese correo
			var agregar = document.getElementsByClassName('email-container')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Debe ingresar su email'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("Ingrese Email");
			return false;
		}else if (!emailValido.test(email)){
			var agregar = document.getElementsByClassName('email-container')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('correo invalida'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert ("correo invalido");
			return false;
		}
	}
	correo();

	//validar contraseña
	function contrasena(){
		var password = document.getElementById('input-password').value;
		if(password.length === 0 || password === null){ //valida que se ingrese correo
			var agregar = document.getElementsByClassName('form-group')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Ingrese Password'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("Ingrese Password");
			return false;
		}else if(password === "123456" || password === "098754" || password === "password"){
			var agregar = document.getElementsByClassName('form-group')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Tu contraseña no puede ser 123456 o 098764 o password'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("Tu contraseña no puede ser 123456 o 098764 o password");
			return false;
		}else if(password.length<6){
			var agregar = document.getElementsByClassName('form-group')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('tu contraseña debe tener mas de 6 caracteres'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
			//alert("tu contraseña debe tener mas de 6 caracteres");
			return false;
		}else{
			//alert("Contraseña segura");
			return true;
		}
	}
	contrasena();

	//seleccionar bicicleta
	function seleccionBici(){
		var bicicleta = document.getElementsByTagName('select'); 
		for (var i = 0; i < bicicleta.length; i++){ //recorre la lista de opciones
			if(bicicleta[i].value === "0"){
			var lista = document.getElementsByClassName('form-group input-box')[1].classList.add('bicicleta'); 
			var agregar = document.getElementsByClassName('bicicleta')[0]; //llamo al elemento al que quiero afectar
			var elementoSpan = document.createElement('span'); //creo span
			var nodoTexto = document.createTextNode('Seleccione una bicicleta'); //creo nodo texto
			elementoSpan.appendChild(nodoTexto); //le digo a elemento elementoSpan que nodoTexto es su hijo
			agregar.appendChild(elementoSpan); //le digo  agregar que elementoSpan es su hijo
				//alert("Seleccione una bicicleta");
				return false;
			}
		} 
			return true;	
	}
	seleccionBici();
}//function principal

