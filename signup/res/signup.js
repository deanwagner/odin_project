function handleForm() {
    const form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.classList.add('validate');
    });

    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', (e) => {
            e.target.classList.add('validate');
        })
    }
}
