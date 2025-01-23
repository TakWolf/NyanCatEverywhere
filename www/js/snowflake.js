/**
 * Copyright 2015 TakWolf
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
