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

class Cat {
    constructor() {
        this.image = new Image()
        this.image.src = 'img/nyancat.gif'
        this.image.style.position = 'fixed'
        document.body.appendChild(this.image)

        this.waiting = true
        this.reset()
        this.draw()
    }

    reset() {
        this.image.width = Math.round(randomNum(100, 200))
        this.x = -this.image.width
        this.y = randomNum(0, window.innerHeight)
        this.speed = randomNum(50, 200)
    }

    update(dt) {
        if (this.waiting) {
            if (randomNum(0, 180) <= 1) {
                this.waiting = false
            }
        } else {
            this.x += this.speed * dt
            if (this.x > window.innerWidth + this.image.width) {
                this.waiting = true
                this.reset()
            }
        }
    }

    draw() {
        this.image.style.left = `${this.x - this.image.width / 2}px`
        this.image.style.top = `${this.y - this.image.height / 2}px`
    }
}

const cats = []
for (let i = 0; i < 30; i++) {
    cats.push(new Cat())
}

const fps = 60
let lastTime = new Date().getTime()
window.setInterval(() => {
    const nowTime = new Date().getTime()
    const deltaTime = nowTime - lastTime
    if (deltaTime - 1000 / fps >= 0) {
        lastTime = nowTime
        for (const cat of cats) {
            cat.update(deltaTime / 1000)
            cat.draw()
        }
    }
}, 1)

const bgm = new Audio()
bgm.autoplay = true
bgm.loop = true
const mp3Src = document.createElement('source')
mp3Src.src = 'bgm/nyancat.mp3'
mp3Src.type = 'audio/mpeg'
bgm.appendChild(mp3Src)
const oggSrc = document.createElement('source')
oggSrc.src = 'bgm/nyancat.ogg'
oggSrc.type = 'audio/ogg'
bgm.appendChild(oggSrc)
document.body.appendChild(bgm)
