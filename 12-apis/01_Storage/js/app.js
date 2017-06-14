
  		function mostrarContador (contador) {
  			var oVentana = window.open("","", "top=200, left=300, width=300, height=400, status=yes, menubar=yes scrollbars=yes");
  			// el segundo parámetro es _blank (único valor con sentido)
  			// status=yes, menubar=yes ¿sin efecto en Chrome?
  			// resizable=yes solo IE 
  			// toolbar=yes solo IE y Firefos 
  			oVentana.document.write("<p>Numero de visitas a la página: " + contador + "</p>");
  		
  		}

		function main () {
		    document.getElementById("btn_1").onclick = function () {
		        localStorage.numeroVisitas = 1;
		        document.getElementById("estado").innerHTML = "Contador ACTIVO"
		    }; // iniciarContador

		    document.getElementById("btn_2").onclick = function () {
		        localStorage.numeroVisitas = 0;
		        document.getElementById("estado").innerHTML = "Contador INACTIVO"
		    }; // vaciarContador

			document.getElementById("btn_3").onclick = function () {
			    mostrarContador(localStorage.numeroVisitas);
			} // mostrarContador;

			document.getElementById("btn_4").onclick = function () {
			    location.reload()
			}; // recargarPagina
			
		    //lo que hacia getCookie();
			if (localStorage.numeroVisitas > 0) {
			    localStorage.numeroVisitas++;
			    document.getElementById("estado").innerHTML = "Contador ACTIVO"
			}
			else {
			    document.getElementById("estado").innerHTML = "Contador INACTIVO"
			}
		    //actualizarContador

		}  	

	  	document.addEventListener("DOMContentLoaded", main, false);	
		// metodo de DOM nivel 2  que indica al agente de usuario que permanezca atento:
		// evento: en este caso la carga completa de la página
		// función a lanzar: en este caso main
		// orden del flujo de eventos: false salta la fase de captura
		// el equivalente del DOM nivel 1 sería
		// window.onload = main
