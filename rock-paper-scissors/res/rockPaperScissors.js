"use strict";

class RockPaperScissors {

    constructor() {
        this.hand = [{
            name : 'Rock',
            win  : 'Rock beats Scissors',
            img  : './img/rock.svg'
        }, {
            name : 'Paper',
            win  : 'Paper beats Rock',
            img  : './img/paper.svg'
        }, {
            name : 'Scissors',
            win  : 'Scissors beats Paper',
            img  : './img/scissors.svg'
        }];

        this.hands     = this.hand.length - 1;
        this.goal      = 5;
        this.userHand  = null;
        this.compHand  = null;
        this.userScore = 0;
        this.compScore = 0;

        this.userDiv    = document.getElementById('userScore');
        this.compDiv    = document.getElementById('compScore');
        this.gameIntro  = document.getElementById('gameIntro');
        this.gameInfo   = document.getElementById('gameInfo');
        this.options    = document.getElementById('options');
        this.selections = document.getElementById('selections');
        this.userStatus = document.getElementById('userStatus');
        this.roundInfo  = document.getElementById('roundInfo');
        this.imgUser    = document.getElementById('imgUserSelection');
        this.imgComp    = document.getElementById('imgCompSelection');

        const links = this.options.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', (e) => {
                e.preventDefault();
                this.startRound(links[i].dataset.index);
            });
        }

        this.btnNextRound = document.getElementById('nextRound');
        this.btnNextRound.addEventListener('click', () => {
            this.nextRound();
        });

        this.btnGameOver = document.getElementById('gameOver');
        this.btnGameOver.addEventListener('click', () => {
            this.resetUI();
        });
    }

    startRound(index) {
        this.userHand = parseInt(index);
        if (!isNaN(this.userHand)) {
            this.compHand = this.getCompHand();
            this.calculateWinner();
        } else {
            this.error("Invalid Input");
        }
    }

    getCompHand() {
        return Math.floor(Math.random() * (this.hands + 1));
    }

    calculateWinner() {
        switch(true) {
            case (this.userHand === this.compHand):
                this.tie();
                break;
            
            case ((this.userHand === 0) && (this.compHand === this.hands)):
                this.userWin();
                break;

            case ((this.userHand === this.hands) && (this.compHand === 0)):
                this.userLose();
                break;

            case (this.userHand > this.compHand):
                this.userWin();
                break;

            case (this.userHand < this.compHand):
                this.userLose();
                break;

            default:
                this.error("Unable to Determine Winner");
        }
    }

    tie() {
        this.userStatus.innerText = 'Draw';
        this.roundInfo.innerText = 'You both played ' + this.hand[this.userHand].name;
        this.result();
    }

    userWin() {
        this.userScore++;
        this.userDiv.innerText = this.userScore;
        this.userStatus.innerText = 'YOU WIN';
        this.roundInfo.innerText = this.hand[this.userHand].win;
        this.result();
    }

    userLose() {
        this.compScore++;
        this.compDiv.innerText = this.compScore;
        this.userStatus.innerText = 'YOU LOSE';
        this.roundInfo.innerText = this.hand[this.compHand].win;
        this.result();
    }

    result() {
        this.imgUser.src = this.hand[this.userHand].img;
        this.imgUser.alt = this.hand[this.userHand].name;
        this.imgComp.src = this.hand[this.compHand].img;
        this.imgComp.alt = this.hand[this.compHand].name;

        this.options.style.display = 'none';
        this.selections.style.display = 'flex';

        if ((this.userScore === this.goal) || (this.compScore === this.goal)) {
            this.gameOver();
        }
    }

    nextRound() {
        this.selections.style.display = 'none';
        this.options.style.display = 'flex';
    }

    gameOver() {
        let message;
        if (this.userScore === this.goal) {
            message = 'V I C T O R Y';
        } else {
            message = 'D E F E A T';
        }
        this.gameIntro.innerText = message;
        this.gameInfo.innerText = 'G A M E - O V E R';
        this.btnNextRound.style.display = 'none';
        this.btnGameOver.style.display = 'block';
    }

    resetUI() {
        this.userHand  = null;
        this.compHand  = null;
        this.userScore = 0;
        this.compScore = 0;

        this.userDiv.innerText = 0;
        this.compDiv.innerText = 0;

        this.gameIntro.innerText = 'First to 5 Wins';
        this.gameInfo.innerText  = 'Choose One to Continue';

        this.userStatus.innerText = '';
        this.roundInfo.innerText  = '';

        this.imgUser.src = '';
        this.imgUser.alt = '';
        this.imgComp.src = '';
        this.imgComp.alt = '';

        this.btnNextRound.style.display = 'block';
        this.btnGameOver.style.display  = 'none';
        this.selections.style.display   = 'none';
        this.options.style.display      = 'flex';
    }

    error(message) {
        const scoreBoard = document.getElementById('scoreBoard');
        scoreBoard.style.display = 'none';
        this.selections.style.display = 'none';
        this.options.style.display = 'none';
        alert(message);
        location.reload();
    }
}