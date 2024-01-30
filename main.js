const form = document.getElementById('validation-form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const errorMessage = document.querySelector('.error-msg');
const successMessage = document.querySelector('.success-msg');

function validarFormulario() {
    const valorCampoA = parseFloat(campoA.value);
    const valorCampoB = parseFloat(campoB.value);

    if (isNaN(valorCampoA) || isNaN(valorCampoB)) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return false;
    }

    if (valorCampoB > valorCampoA) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    validarFormulario();
});

campoA.addEventListener('input', function () {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
});

campoB.addEventListener('input', function () {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
});