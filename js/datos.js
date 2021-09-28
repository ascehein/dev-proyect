function enviarDatoss(){

    var nombre = document.getElementById('Nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;

    var mensajeFinal = 'El cliente con nombre:'+nombre+
                        'Email:'+email+
                        'Teléfono:'+telefono+
                        'Mensaje clientes: '+mensaje;



    console.log(mensajeFinal);

}

