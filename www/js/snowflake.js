
function randomNum(min, max) {
    return Math.random() * (max - min) + min
}

class Snowflake {
    constructor() {
        this.image = new Image()
        this.image.width = Math.round(randomNum(20, 30))
        this.image.src = 'img/snowflake.png'
        this.image.style.position = 'fixed'
        this.image.style.opacity = randomNum(0.7, 1).toString()
        document.body.appendChild(this.image)

        this.x = randomNum(-this.image.width, window.innerWidth)
        this.y = -this.image.width
        this.moveSpeed = randomNum(50, 120)
        this.angle = 0
        this.rotateSpeed = randomNum(-180, 180)
    }

    update(dt) {
        this.y += this.moveSpeed * dt
        this.angle += this.rotateSpeed * dt
    }

    draw() {
        this.image.style.left = `${this.x}px`
        this.image.style.top = `${this.y}px`
        this.image.style.transform = `rotate(${this.angle}deg)`
    }

    checkDelete() {
        if (this.y > window.innerHeight + this.image.width) {
            document.body.removeChild(this.image)
            return true
        } else {
            return false
        }
    }
}

let snowflakes = []

const fps = 60
let lastTime = new Date().getTime()
window.setInterval(() => {
    const nowTime = new Date().getTime()
    const deltaTime = nowTime - lastTime
    if (deltaTime - 1000 / fps >= 0) {
        lastTime = nowTime
        if (randomNum(0, 6) <= 1) {
            snowflakes.push(new Snowflake())
        }
        for (const snowflake of snowflakes) {
            snowflake.update(deltaTime / 1000)
            snowflake.draw()
        }
        snowflakes = snowflakes.filter(snowflake => !snowflake.checkDelete())
        console.debug('snowflake count : ' + snowflakes.length)
    }
}, 1)
