function validaFrom(){
	var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

	function name(){//valida nombre
		var nombre = document.getElementById('name').value;
		if(nombre.length == 0){
			var agregar = document.getElementsByTagClass('name-container');
			var elementoSpan = document.createElement("span");
			/*alert("ingrese nombre");
			return false;*/
		}
		if(!soloLetras.test(nombre)){
			var agregar = document.getElementsByTagClass('name-container');
			var elementoSpan = document.createElement("span");
			/*alert("ingrese solo letras");
			return false;*/
		}else if(nomre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
			var agregar = document.getElementsByTagClass('name-container');
			var elementoSpan = document.createElement("span");
			/*alert("ingrese inicial con mayuscula");
			return false;*/
		}
	}
	name();
	//validacr apellido
	function apellido(){
		var apellido = document.getElementById('lastname').value;
		if(apellido.length == 0){//valida que se ingrese correo
			alert("Ingrese Apellido");
			return false;
		}
		if (!soloLetras.test(apellido)){
			alert("ingrese solo letras");
			return false;	
		}else if(apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){
			alert("ingrese inicial con mayuscula");
			return false;
		}
	}
	apellido()
	//validar correo
	function correo(){
		var email = document.getElementById('input-email').value;
		if(email.length == 0){//valida que se ingrese correo
			alert("Ingrese Email");
			return false;
		}
		if (!emailValido.test(email)){
			alert ("correo invalido");
			return false;
		}
	}
	correo();
	//validar contraseña
	function contraseña(){
		var password = document.getElementById('input-password').value;
		if(password.length == 0){//valida que se ingrese correo
			alert("Ingrese Password");
			return false;
		}else if(password === "123456" || password === "098754" || password === "password"){
			alert("Tu contraseña no puede ser 123456 o 098764 o password");
			return false;
		}else if(password.length<6){
			alert("tu contraseña debe tener mas de 6 caracteres");
			return false;
		}else{
			alert("Contraseña segura");
			return true;
		}
	}
	contraseña();
	//seleccionar bicicleta
	function seleccionBici(){
		var bicicleta = document.getElementsByTagName('select'); 
		for (var i = 0; i < bicicleta.length; i++){ //recorre la lista de opciones
			if(bicicleta[i].value === "0"){
				alert("Seleccione una bicicleta");
				return false;
			}
		} 
			return true;	
	}
	seleccionBici();
	//agregar span
	function span(){
		var agregar = document.getElementsByTagClass('input-box');
		var elementoSpan = document.createElement("span");
		var nodoTexto = document.createTextNode("p");
		elementoSpan.appenChild(nodoTexto);
		agregar.appenChild(elementoSpan);

	}
	span();
}//function principal
validaFrom();
