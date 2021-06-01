function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '541125488970';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let servicios = document.querySelector('#servicios').value
        let servicios1 = document.querySelector('#servicios1').value
        let servicios2 = document.querySelector('#servicios2').value
        let servicios3 = document.querySelector('#servicios3').value
        let email = document.querySelector('#email').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Consulta por Servicio_*%0A*¿Cual es tu nombre?*%0A' + nombre + '%0A*¿Cuáles son tus apellidos?*%0A' + apellidos + '%0A*¿Cuál es tu correo electrónico?*%0A' + email +  '%0A*¿Servicio Solicitado?*%0A'  + servicios + '%0A*¿Servicio Solicitado?*%0A' + servicios1 + '%0A*¿Servicio Solicitado?*%0A' + servicios2 + '%0A*¿Servicio Solicitado?*%0A' + servicios3 + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = 'class="btn" value="ENVIAR CONSULTA"'
        buttonSubmit.disabled = false
    }, 3000);
});