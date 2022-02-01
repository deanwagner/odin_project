"use strict";

/**
 * Handle Form
 * @author Dean Wagner <info@deanwagner.net>
 */
function handleForm() {
    const form   = document.getElementsByTagName('form')[0];
    const button = form.getElementsByTagName('button')[0];
    const inputs = document.getElementsByTagName('input');

    // Button Click Event Listener
    button.addEventListener('click', () => {
        // Validate All Inputs
        form.classList.add('validate');
        messages();
    });

    // Input Blur Event Listener
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', (e) => {
            // Validate this Input
            e.target.classList.add('validate');
            messages();
        });
    }

    // Show/Hide Error Messages
    function messages() {
        // Remove Old Messages
        const valid = form.querySelectorAll('input:valid');
        for (let i = 0; i < valid.length; i++) {
            const label = valid[i].parentElement;
            const div   = label.getElementsByTagName('div')[0];
            if (typeof div !== 'undefined') {
                label.removeChild(div);
            }
        }

        // Create New Messages
        const invalid = form.querySelectorAll('input:invalid');
        for (let i = 0; i < invalid.length; i++) {
            const label = invalid[i].parentElement;
            const div   = label.getElementsByTagName('div')[0];
            console.log(div);
            if (typeof div === 'undefined') {
                const error = document.createElement('div');
                error.innerText = label.title;
                label.appendChild(error);
            }
        }
    }
}
