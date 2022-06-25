const $formulario = document.querySelector('.formulario')
const $correo = document.querySelector('.formulario__correo')

const correo = /^[áéíóúñüa-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[áéíóúñüa-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[áéíóúñüa-z0-9](?:[áéíóúñüa-z0-9-]*[áéíóúñüa-z0-9])?\.)+[áéíóúñüa-z0-9](?:[áéíóúñüa-z0-9-]*[áéíóúñüa-z0-9])?$/

$formulario.addEventListener('submit', e => {
    e.preventDefault()
    if (correo.test($correo.value)) {
        $formulario.submit()
    } else {
        $formulario.classList.add('formulario__activo')
    }
})

$correo.addEventListener('focus', e => {
    $formulario.classList.remove('formulario__activo')
})
