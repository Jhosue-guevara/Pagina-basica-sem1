function MostrarMensajee(){
    window.alert("Hola,Haz dado click en el boton ");
 
}
function MostrarMensaje() {
    // Utiliza SweetAlert en lugar de window.alert
    Swal.fire({
        icon: 'success',
        title: '¡Mensaje Enviado!',
        text: 'Tu mensaje se ha enviado con éxito.',
    });
}