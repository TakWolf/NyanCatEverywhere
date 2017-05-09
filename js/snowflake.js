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

    /* snowflake class */
    function Snowflake() {

        this.img = document.createElement('img');
        this.img.src = 'img/snowflake.png';
        this.img.style.position = 'fixed';
        this.img.width = getRandomNum(20, 30);
        this.x = getRandomNum(-this.img.width, window.innerWidth);
        this.y = -this.img.width;
        this.angle = 0;
        this.moveSpeed = getRandomNum(1, 2);
        this.rotateSpeed = getRandomNum(-4, 4);
        this.img.style.left = this.x + 'px';
        this.img.style.top = this.y + 'px';
        this.img.style.opacity = getRandomNum(70, 100) / 100;
        document.body.appendChild(this.img);

        /* this should call in loop update callback */
        this.update = function(dt) {
            this.y += this.moveSpeed;
            this.angle += this.rotateSpeed;
            this.img.style.top = this.y + 'px';
            this.img.style.transform = 'rotate(' + this.angle + 'deg)';
        };

        /* out of window will remove from array and body */
        this.isOutOfWindow = function() {
            return this.y > window.innerHeight + this.img.width;
        };

        /* remove obj from body */
        this.delete = function() {
            document.body.removeChild(this.img);
        };

    }

    /* snowflake array used to manage */
    var snowflakes = [];

    /* load callback */
    function load() {
        // nothing to do
    }

    /* update callback */
    function update(dt) {
        /* create snowflake random */
        if (getRandomNum(0, 6) === 0) {
            snowflakes.push(new Snowflake());
        }
        /* update snowflake array */
        snowflakes.forEach(function (snowflake) {
            snowflake.update(dt);
        });
        /* delete snowflake */
        for (var n = 0; n < snowflakes.length; n++) {
            if (snowflakes[n].isOutOfWindow()) {
                snowflakes[n].delete();
                snowflakes.splice(n, 1);
                break;
            }
        }
        /* debug now array length */
        console.debug('snowflake count : ' + snowflakes.length);
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
