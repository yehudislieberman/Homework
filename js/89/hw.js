(async function () {
    'use strict';

    const SNAKE_SIZE = 64;
    const canvas = document.querySelector('#theCanvas');
    const context = canvas.getContext('2d');
    const crashSound = document.querySelector('#crash');
    const crunchSound = document.querySelector('#crunch');

    function resizeCanvas() {
        canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % SNAKE_SIZE);
        canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % SNAKE_SIZE);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let score = 0;
    let speed = 200;

    class Snake {
        constructor() {
            this.segments = [{ x: -SNAKE_SIZE, y: 0 }];
        }

        move() {

            let tempX = this.segments[0].x;
            let tempY = this.segments[0].y;

            switch (direction) {
                case 'ArrowUp':
                    tempY -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    tempX += SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    tempY += SNAKE_SIZE;
                    break;
                case 'ArrowLeft':
                    tempX -= SNAKE_SIZE;
                    break;
            }

            if (tempX < 0 || tempX > canvas.width - SNAKE_SIZE || tempY < 0 || tempY > canvas.height - SNAKE_SIZE) {
                gameOver = true;
            }

            if (!gameOver) {
                this.segments.unshift({ x: tempX, y: tempY });

                for (let i = 1; i < this.segments.length; i++) {
                    if (tempX === this.segments[i].x && tempY === this.segments[i].y) {
                        gameOver = true;
                        break;
                    }
                }

                if (this.segments[0].x === apple.x && this.segments[0].y === apple.y) {
                    crunchSound.currentTime = 0;
                    crunchSound.play();
                    score++;
                    speed -= speed * .05;
                    console.log(speed);
                    apple.move();
                } else {
                    this.segments.pop();
                }
            }

            this.segments.forEach(segment => {
                context.drawImage(snakeHead, segment.x, segment.y);
            });
        }
    }

    class Apple {
        constructor() {
            this.move();
        }

        draw() {
            context.drawImage(appleImg, this.x, this.y);
        }

        move() {
            let overlap = true;
            while (overlap) {
                this.x = Apple.#getRandomNumber(canvas.width);
                this.y = Apple.#getRandomNumber(canvas.height);
                overlap = this.selfCollision(snake);
            }
        }

        selfCollision(snake) {
            return snake.segments.some(segment => this.x === segment.x && this.y === segment.y);
        }

        static #getRandomNumber(max) {
            let num = Math.floor(Math.random() * (max + 1));
            return num - (num % SNAKE_SIZE);
        }
    }

    let gameOver = false;

    function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake.move();
        apple.draw();

        if (!gameOver) {
            setTimeout(gameLoop, speed);
        } else {
            context.fillStyle = 'green';
            context.font = 'bold 32px Arial';
            const gameOverText = 'Game Over!!';
            const sm = context.measureText(gameOverText);
            context.fillText(gameOverText, (canvas.width / 2) - (sm.width / 2), (canvas.height / 2) - ((sm.actualBoundingBoxAscent + sm.actualBoundingBoxDescent) / 2));
            crashSound.play();
        }

        context.fillStyle = 'red';
        context.font = 'bold 32px Arial';
        const scoreText = `Score: ${score}`;
        const sm = context.measureText(scoreText);
        context.fillText(scoreText, canvas.width - sm.width - 16, sm.actualBoundingBoxAscent + sm.actualBoundingBoxDescent + 16);
    }

    let direction = 'ArrowRight';
    document.addEventListener('keydown', e => {
        console.log(e.key);
        switch (e.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                direction = e.key;
                break;
        }
    });

    async function loadImg(src) {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img');
            img.src = src;
            img.onload = () => { resolve(img); };
            img.onerror = e => reject(`failed to load ${src} - ${e}`);
        });
    }

    let snakeHead;
    let appleImg;
    let snake;
    let apple;

    try {
        const [snakePic, applePic] = await Promise.all([loadImg('images/snakehead.png'), loadImg('images/apple.png')]);
        snakeHead = snakePic;
        appleImg = applePic;
        snake = new Snake();
        apple = new Apple();
        setTimeout(gameLoop, speed);
    } catch (e) {
        console.error(e);
    }

}());