"use strict";

/**
 * LCD Calculator App
 * @class
 * @author  Dean Wagner <info@deanwagner.net>
 */
class Calculator {

    /**
     * Constructor
     * @constructor
     */
    constructor() {
        // LCD Pixel Names
        this.pixels = [
            'topCenter',
            'topLeft',
            'topRight',
            'midCenter',
            'botLeft',
            'botRight',
            'botCenter',
            'point'
        ];

        // LCD Pixel Matrix: Numbers
        this.matrix = [
            [ 1, 1, 1, 0, 1, 1, 1, 0 ], // 0
            [ 0, 0, 1, 0, 0, 1, 0, 0 ], // 1
            [ 1, 0, 1, 1, 1, 0, 1, 0 ], // 2
            [ 1, 0, 1, 1, 0, 1, 1, 0 ], // 3
            [ 0, 1, 1, 1, 0, 1, 0, 0 ], // 4
            [ 1, 1, 0, 1, 0, 1, 1, 0 ], // 5
            [ 1, 1, 0, 1, 1, 1, 1, 0 ], // 6 
            [ 1, 0, 1, 0, 0, 1, 0, 0 ], // 7
            [ 1, 1, 1, 1, 1, 1, 1, 0 ], // 8
            [ 1, 1, 1, 1, 0, 1, 1, 0 ]  // 9
        ];

        // LCD Pixel Matrix: Characters
        this.matrix['_'] = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
        this.matrix['E'] = [ 1, 1, 0, 1, 1, 0, 1, 0 ];
        this.matrix['r'] = [ 0, 0, 0, 1, 1, 0, 0, 0 ];
        this.matrix['o'] = [ 0, 0, 0, 1, 1, 1, 1, 0 ];
        this.matrix['H'] = [ 0, 1, 1, 1, 1, 1, 0, 0 ];
        this.matrix['L'] = [ 0, 1, 0, 0, 1, 0, 1, 0 ];
        this.matrix['O'] = [ 1, 1, 1, 0, 1, 1, 1, 0 ];
        this.matrix['.'] = [ 0, 0, 0, 0, 0, 0, 0, 1 ];
        this.matrix['-'] = [ 0, 0, 0, 1, 0, 0, 0, 0 ];
        
        // Class Properties
        this.maxDigits = 10;
        this.display   = '0';
        this.memory    = null;
        this.operator  = '';
        this.reset     = false;

        // Get SVG Template
        this.screen   = document.getElementById('lcd_screen');
        const baseSVG = document.getElementById('lcd_digit');
        this.newSVG   = baseSVG.cloneNode(true);
        this.screen.innerHTML = '';

        // Build LCD Screen from SVG Template
        for (let i = 0; i < this.maxDigits; i++) {
            // Clone SVG Template
            const svg = this.newSVG.cloneNode(true);

            // Assign IDs
            svg.id = svg.id + '_' + i;
            const ids = svg.querySelectorAll('.lcd_whole > *');
            for (let ii = 0; ii < ids.length; ii++) {
                ids[ii].id = ids[ii].id + '_' + i;
            }

            // Add to DOM
            this.screen.prepend(svg);
        }

        // Event Listener
        this.buttons = document.getElementsByTagName('button');
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', (e) => {
                // Handle Button Click Event
                this.buttonEvent(e.target);
            });
        }

        this.displayString('HELLO');
    }

    buttonEvent(button) {
        if (this.reset) {
            this.reset   = false;
            this.display = '0';
        }

        switch (true) {
            case (button.id === 'btn_c'):
                this.btnClear();
                break;
            case (button.id === 'btn_b'):
                this.btnBack();
                break;
            case (button.id === 'btn_a'):
                this.btnAdd();
                break;
            case (button.id === 'btn_s'):
                this.btnSubtract();
                break;
            case (button.id === 'btn_m'):
                this.btnMultiply();
                break;
            case (button.id === 'btn_d'):
                this.btnDivide();
                break;
            case (button.id === 'btn_e'):
                this.btnEquals();
                break;
            default:
                this.btnInput(button); 
        } 

        this.displayString(this.display);
    }

    btnInput(button) {
        if (this.display === '0') {
            this.display = button.innerText;
        } else {
            this.display += button.innerText;
        }
    }

    btnClear() {
        this.display  = '0';
        this.memory   = null;
        this.operator = '';
    }

    btnBack() {
        if (this.display.length > 1) {
            this.display = this.display.slice(0, -1);
        } else {
            this.display = '0';
        }
        
    }

    btnEquals() {
        if ((this.operator !== '') && (this.memory !== null)) {
            this.operate('=');
        }
    }

    btnAdd() {
        this.operate('+');
    }

    btnSubtract() {
        this.operate('-');
    }

    btnMultiply() {
        this.operate('*');
    }

    btnDivide() {
        this.operate('/');
    }

    operate(op) {
        this.reset = true;

        if ((this.memory === null) || (this.operator === '')) {
            this.memory   = parseInt(this.display);
            this.operator = op;
        } else {
            let result;

            switch (true) {
                case (this.operator === '+'):
                    result = this.add(this.memory, parseInt(this.display));
                    break;
                case (this.operator === '-'):
                    result = this.subtract(this.memory, parseInt(this.display));
                    break;
                case (this.operator === '*'):
                    result = this.multiply(this.memory, parseInt(this.display));
                    break;
                case (this.operator === '/'):
                    result = this.divide(this.memory, parseInt(this.display));
                    break;
                default:
                    result = 'Error';
            }

            if (result === 'Error') {
                this.memory   = null;
                this.display  = result;
                this.reset    = true;
                this.operator = '';
                console.error('Invalid Operator');
            } else {
                if (op !== '=') {
                    this.operator = op;
                }
                this.memory  = result; 
                this.display = result.toString(); 
            }
        }
    }

    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }

    displayString(str) {
        this.displayClear();

        if (str === '') {
            str = '0';
        }

        if (str.length > this.maxDigits) {
            this.memory   = null;
            this.reset    = true;
            this.operator = '';
            str = 'Error';
            console.warn('Number Too Large');
        }

        let digits = str.toString().split('').reverse();

        for (let i = 0; i < digits.length; i++) {
            if (typeof this.matrix[digits[i]] !== 'undefined') {
                this.displayDigit(this.matrix[digits[i]], i);
            }
        }
    }

    displayDigit(digit, place) {
        digit.forEach((value, index) => {
            const elm = document.getElementById(this.pixels[index] + '_' + place);
            if (this.pixels[index] === 'point') {
                if (value) {
                    elm.classList.remove('lcd_off');
                    elm.classList.add('lcd_show');
                } else {
                    elm.classList.remove('lcd_show');
                    elm.classList.add('lcd_off');
                } 
            } else {
                if (value) {
                    elm.classList.remove('lcd_hide');
                    elm.classList.add('lcd_show');
                } else {
                    elm.classList.remove('lcd_show');
                    elm.classList.add('lcd_hide');
                } 
            }
        });
    }

    displayClear() {
        for (let i = 0; i < this.maxDigits; i++) {
            for (let ii = 0; ii < this.pixels.length; ii++) {
                const elm = document.getElementById(this.pixels[ii] + '_' + i);
                
                if (this.pixels[ii] === 'point') {
                    elm.classList.remove('lcd_show');
                    elm.classList.add('lcd_off');
                } else {
                    elm.classList.remove('lcd_show');
                    elm.classList.add('lcd_hide');
                }
            }
        }
    }
}