class Bird {
    constructor() {
        this.element = document.getElementById("bird");
        this.y = 250;
        this.velocity = 0;
        this.gravity = 0.5;
    }

    jump() {
        this.velocity = -8;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        this.element.style.top = this.y + "px";
    }
}

class Pipe {
    constructor(game) {
        this.game = game;

        this.gap = 170;
        this.x = 500;
        this.width = 60;

        this.topHeight =
            Math.floor(Math.random() * 250) + 50;

        this.bottomY =
            this.topHeight + this.gap;

        this.topPipe =
            document.createElement("div");

        this.bottomPipe =
            document.createElement("div");

        this.topPipe.classList.add("pipe");
        this.bottomPipe.classList.add("pipe");

        this.topPipe.style.height =
            this.topHeight + "px";

        this.bottomPipe.style.height =
            (600 - this.bottomY) + "px";

        this.topPipe.style.top = "0px";
        this.bottomPipe.style.bottom = "0px";

        this.topPipe.style.left =
            this.x + "px";

        this.bottomPipe.style.left =
            this.x + "px";

        game.container.appendChild(this.topPipe);
        game.container.appendChild(this.bottomPipe);

        this.passed = false;
    }

    update() {
        this.x -= 3;

        this.topPipe.style.left =
            this.x + "px";

        this.bottomPipe.style.left =
            this.x + "px";

        if (!this.passed && this.x < 80) {
            this.passed = true;
            this.game.score++;
            this.game.scoreElement.innerText =
                "Score: " + this.game.score;
        }
    }

    isOffScreen() {
        return this.x < -60;
    }

    remove() {
        this.topPipe.remove();
        this.bottomPipe.remove();
    }
}

class Game {
    constructor() {
        this.container =
            document.getElementById("game");

        this.scoreElement =
            document.getElementById("score");

        this.bird = new Bird();
        this.pipes = [];
        this.score = 0;

        this.start();
    }

    start() {
        document.addEventListener(
            "keydown",
            () => this.bird.jump()
        );

        document.addEventListener(
            "click",
            () => this.bird.jump()
        );

        setInterval(() => {
            this.pipes.push(new Pipe(this));
        }, 2000);

        this.loop();
    }

    collision(pipe) {
        const birdX = 80;
        const birdY = this.bird.y;
        const birdSize = 40;

        if (
            birdX + birdSize > pipe.x &&
            birdX < pipe.x + pipe.width
        ) {
            if (
                birdY < pipe.topHeight ||
                birdY + birdSize > pipe.bottomY
            ) {
                return true;
            }
        }

        return false;
    }

    gameOver() {
        alert("Game Over! Score: " + this.score);
        location.reload();
    }

    loop() {
        const updateGame = () => {

            this.bird.update();

            if (
                this.bird.y < 0 ||
                this.bird.y > 560
            ) {
                this.gameOver();
            }

            this.pipes.forEach(pipe => {
                pipe.update();

                if (this.collision(pipe)) {
                    this.gameOver();
                }
            });

            this.pipes = this.pipes.filter(pipe => {
                if (pipe.isOffScreen()) {
                    pipe.remove();
                    return false;
                }
                return true;
            });

            requestAnimationFrame(updateGame);
        };

        updateGame();
    }
}

new Game();