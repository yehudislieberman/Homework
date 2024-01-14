(function () {
    'use strict';

    const canvas = document.querySelector('#theCanvas');
    const context = canvas.getContext('2d');
    const balls = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ball {
        constructor(x, y, color, radius, dx, dy) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.radius = radius;
            this.dx = dx;
            this.dy = dy;

            this.draw = function () {
                context.beginPath();
                context.fillStyle = this.color;
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                context.fill();
            };

            this.move = function () {
                this.x += this.dx * 2;
                this.y += this.dy * 0.8;

                if (this.x < this.radius || this.x > window.innerWidth - this.radius) {
                    this.dx = -this.dx;
                }

                if (this.y < this.radius || this.y > window.innerHeight - this.radius) {
                    this.dy = -this.dy;
                }
            };
        }
    }

    function drawBalls() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        balls.forEach(ball => {
            ball.draw();
            ball.move();
        });
    }

    function addBall() {
        const color = document.getElementById('color').value;
        const radius = parseInt(document.getElementById('radius').value);

        const x = Math.random() * (canvas.width - 2 * radius) + radius;
        const y = Math.random() * (canvas.height - 2 * radius) + radius;

        const newBall = new Ball(x, y, color, radius, 1, 1);
        balls.push(newBall);
    }

    document.getElementById('customizeBall').addEventListener('submit', function (e) {
        e.preventDefault();
        addBall();
    });

    setInterval(drawBalls, 20);

})();