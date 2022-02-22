/**
 * Modal
 * @class
 * @property {object} mask - Mask Element
 * @author Dean Wagner <info@deanwagner.net>
 */
class Modal {

    // Class Properties
    mask;

    /**
     * Constructor
     * @constructor
     * @param {string} maskID - Element ID
     */
    constructor(maskID = 'modal') {

        /* Used CSS @import instead
        // Load CSS
        const css = document.createElement('link');
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('href', 'https://deanwagner.github.io/odin_project/modules/modal/modal.css');
        document.head.appendChild(css);
        */

        // Mask Element
        this.mask = document.getElementById(maskID);

        // Insert Close Buttons
        const modals = document.querySelectorAll(`#${maskID} > *`);
        modals.forEach((el) => {
            if (el.hasAttribute('id') && el.id !== '') {
                el.prepend(this.closeButton(el.id));
            }
        });
    }

    /**
     * Open Modal
     * @param {string} id - Modal ID
     */
    open(id) {
        const modal = document.getElementById(id);
        this.mask.style.display = 'flex';
        modal.style.display     = 'block';
        this.mask.style.opacity = '1';
        modal.style.opacity     = '1';
    }

    /**
     * Close Modal
     * @param {string} id - Modal ID
     */
    close(id) {
        const modal = document.getElementById(id);
        modal.style.opacity     = '0';
        this.mask.style.opacity = '0';
        modal.style.display     = 'none';
        this.mask.style.display = 'none';
    }

    /**
     * Modal Close Button [X]
     * @param {string} modalID - Modal ID
     * @returns {object} - Anchor Element
     */
    closeButton(modalID) {
        const a = document.createElement('a');
        a.classList.add('close_modal');
        a.dataset.id = modalID;
        a.setAttribute('href', '#');
        a.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>';
        a.addEventListener('click', (e) => {
            e.preventDefault();
            this.close(e.currentTarget.dataset.id);
        });
        return a;
    }
}

export default Modal;