const email = document.getElementById('email');
const senha = document.getElementById('senha');

email.addEventListener('focus', () => {
    email.style.borderColor = "#f45b09";
})

email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc";
})

senha.addEventListener('focus', () => {
    senha.style.borderColor = "#f45b09";
})

senha.addEventListener('blur', () => {
    senha.style.borderColor = "#ccc";
})


