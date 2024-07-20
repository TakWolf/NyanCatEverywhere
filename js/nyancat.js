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
(function() {
    // return a int random num
    function getRandomNum(min, max) {
        let range = max - min
        let rand = Math.random()
        return(min + Math.round(rand * range))
    }

    // cat class
    function Cat() {
        // reset position xy and speed
        this.reset = function() {
            this.img.width = getRandomNum(100, 200)
            this.x = -this.img.width
            this.y = getRandomNum(0, window.innerHeight - 100)
            this.img.style.left = this.x + 'px'
            this.img.style.top = this.y + 'px'
            this.speed = getRandomNum(1, 5)
        }

        this.img = document.createElement('img')
        this.img.src = 'img/nyancat.gif'
        this.img.style.position = 'fixed'
        this.waiting = true // ture is not display
        document.body.appendChild(this.img)
        this.reset()

        // this should call in loop update callback
        this.update = function(dt) {
            if (this.waiting) {
                if (getRandomNum(0, 180) === 0) { // about 3 seconds
                    this.waiting = false
                    this.reset()
                }
            } else {
                this.x += this.speed
                this.img.style.left = this.x + 'px'
                if (this.x > window.innerWidth + this.img.width) {
                    this.waiting = true
                }
            }
        }
    }

    // cat array used to manage
    let cats = []

    // load callback
    function load() {
        // init cats
        for (let n = 0; n < 20; n++) {
            cats[n] = new Cat()
        }
        // play bgm
        let bgm = document.createElement('audio')
        bgm.autoplay = true
        bgm.loop = true
        let src1 = document.createElement('source')
        src1.src = 'bgm/nyancat.mp3'
        src1.type = 'audio/mpeg'
        bgm.appendChild(src1)
        let src2 = document.createElement('source')
        src2.src = 'bgm/nyancat.ogg'
        src2.type = 'audio/ogg'
        bgm.appendChild(src2)
        document.body.appendChild(bgm)
    }

    // update callback
    function update(dt) {
        cats.forEach(function (cat) {
            cat.update(dt)
        })
    }

    // start loop engine
    function start() {
        // make a fps loop frame
        let fps = 60
        let lastTime = new Date().getTime()
        let loop = function() {
            let nowTime = new Date().getTime()
            let deltaTime = nowTime - lastTime
            if (deltaTime - 1000 / fps >= 0) {
                lastTime = nowTime
                update(deltaTime / 1000)
            }
        }
        // load callback
        load()
        // start loop as soon as possible
        window.setInterval(loop, 1)
    }
    start()
})()
