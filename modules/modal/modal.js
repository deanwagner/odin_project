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
        this.mask = document.getElementById(maskID);
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
}

export default Modal;