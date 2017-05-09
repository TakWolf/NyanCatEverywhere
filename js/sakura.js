/*
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

    /* return a int random num */
    function getRandomNum(min, max) {
        var range = max - min;
        var rand = Math.random();
        return(min + Math.round(rand * range));
    }

    /* sakura class */
    function Sakura() {

        this.img = document.createElement('img');
        this.img.src = 'img/sakura.png';
        this.img.style.position = 'fixed';
        this.img.height = getRandomNum(32, 48);
        this.x = getRandomNum(-this.img.height, window.innerWidth + window.innerHeight);
        this.y = -this.img.height;
        this.moveSpeed = getRandomNum(1, 3);
        this.angle = 0;
        this.turn = 0;
        this.shaft = getRandomNum(0, 1) === 0 ? 'x' : 'y';
        this.rotateSpeed = getRandomNum(-100, 100) / 100 * 4;
        this.overturnSpeed = getRandomNum(-100, 100) / 100 * 8;
        this.img.style.left = this.x + 'px';
        this.img.style.top = this.y + 'px';
        this.img.style.opacity = 0.8;
        document.body.appendChild(this.img);

        /* this should call in loop update callback */
        this.update = function(dt) {
            this.x -= this.moveSpeed;
            this.y += this.moveSpeed;
            this.img.style.left = this.x + 'px';
            this.img.style.top = this.y + 'px';
            this.angle += this.rotateSpeed;
            this.turn += this.overturnSpeed;
            if (this.shaft === 'x') {
                this.img.style.transform = 'rotateX(' + this.turn + 'deg) rotate(' + this.angle + 'deg)';
            } else {
                this.img.style.transform = 'rotateY(' + this.turn + 'deg) rotate(' + this.angle + 'deg)';
            }
        };

        /* out of window will remove from array and body */
        this.isOutOfWindow = function() {
            return this.y > window.innerHeight + this.img.height || this.x < -this.img.height;
        };

        /* remove obj from body */
        this.delete = function() {
            document.body.removeChild(this.img);
        };

    }

    /* sakura array used to manage */
    var sakuras = [];

    /* load callback */
    function load() {
        // nothing to do
    }

    /* update callback */
    function update(dt) {
        /* create sakura random */
        if (getRandomNum(0, 5) === 0) {
            sakuras.push(new Sakura());
        }
        /* update sakura array */
        sakuras.forEach(function (sakura) {
            sakura.update(dt);
        });
        /* delete sakura */
        for (var n = 0; n < sakuras.length; n++) {
            if (sakuras[n].isOutOfWindow()) {
                sakuras[n].delete();
                sakuras.splice(n, 1);
                break;
            }
        }
        /* debug now array length */
        console.debug('sakura count : ' + sakuras.length);
    }

    /* in load callback to make sure body element is exist */
    window.addEventListener('load', function() {
        /* make a fps loop frame */
        var fps = 60;
        var lastTime = new Date().getTime();
        var loop = function() {
            var nowTime = new Date().getTime();
            var deltaTime = nowTime - lastTime;
            if(deltaTime - 1000/fps >= 0) {
                lastTime = nowTime;
                update(deltaTime/1000);
            }
        };
        /* load callback */
        load();
        /* start loop as soon as possible */
        window.setInterval(loop, 1);
    }, false);

})();
