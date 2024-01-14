(function () {
    'use strict';

    const canvas = document.querySelector('#theCanvas');
    const context = canvas.getContext('2d');

    const colorInput = document.getElementById('color');
    const amountInput = document.getElementById('antAmount');
    const addAntForm = document.getElementById('addAnts');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        constructor() {
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight / 2;
            this.color = colorInput.value;
            this.dx = 0;
            this.dy = 0;
            this.framesInOneDirection = 0;
            this.pickNewDirection();
        }

        draw() {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, 3, 5);
        }

        move() {
            if (this.framesInOneDirection <= 0) {
                this.pickNewDirection();
            }

            this.x += this.dx;
            this.y += this.dy;

            if (this.x <= 0 || this.x >= canvas.width - 3 || this.y <= 0 || this.y >= canvas.height - 5) {
                this.framesInOneDirection--;
            } else {
                this.pickNewDirection();
            }

            this.draw();
        }

        pickNewDirection() {
            this.framesInOneDirection = Ant.#getRandomNumber(5, 100);
            this.dx = Ant.#getRandomNumber(-1, 1);
            this.dy = Ant.#getRandomNumber(-1, 1);

        }

        static #getRandomNumber(min, max) {
            return Math.floor(Math.random() * ((max - min) + 1)) + min;
        }

    }

    const ants = [];

    function addAnts() {
        const count = parseInt(amountInput.value, 10);
        const color = colorInput.value;

        for (let i = 0; i < count; i++) {
            ants.push(new Ant());
        }
    }

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.move());
    }, 20);

    addAntForm.addEventListener('submit', e => {
        e.preventDefault();
        addAnts();
    });

})();