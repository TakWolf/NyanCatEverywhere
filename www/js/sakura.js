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

class Sakura {
    constructor() {
        this.image = new Image()
        this.image.height = Math.round(randomNum(32, 48))
        this.image.src = 'img/sakura.png'
        this.image.style.position = 'fixed'
        this.image.style.opacity = '0.8'
        document.body.appendChild(this.image)

        this.x = randomNum(-this.image.height, window.innerWidth + window.innerHeight)
        this.y = -this.image.height
        this.moveSpeed = randomNum(50, 120)
        this.angle = 0
        this.turn = 0
        this.shaft = randomNum(0, 1) < 0.5 ? 'x' : 'y'
        this.rotateSpeed = randomNum(-180, 180)
        this.overturnSpeed = randomNum(-360, 360)
    }

    update(dt) {
        this.x -= this.moveSpeed * dt
        this.y += this.moveSpeed * dt
        this.angle += this.rotateSpeed * dt
        this.turn += this.overturnSpeed * dt
    }

    draw() {
        this.image.style.left = `${this.x}px`
        this.image.style.top = `${this.y}px`
        if (this.shaft === 'x') {
            this.image.style.transform = `rotateX(${this.turn}deg) rotate(${this.angle}deg)`
        } else {
            this.image.style.transform = `rotateY(${this.turn}deg) rotate(${this.angle}deg)`
        }
    }

    checkDelete() {
        if (this.y > window.innerHeight + this.image.height || this.x < -this.image.height) {
            document.body.removeChild(this.image)
            return true
        } else {
            return false
        }
    }
}

let sakuras = []

const fps = 60
let lastTime = new Date().getTime()
window.setInterval(() => {
    const nowTime = new Date().getTime()
    const deltaTime = nowTime - lastTime
    if (deltaTime - 1000 / fps >= 0) {
        lastTime = nowTime
        if (randomNum(0, 20) <= 1) {
            sakuras.push(new Sakura())
        }
        for (const sakura of sakuras) {
            sakura.update(deltaTime / 1000)
            sakura.draw()
        }
        sakuras = sakuras.filter(sakura => !sakura.checkDelete())
        console.debug('sakura count : ' + sakuras.length)
    }
}, 1)
