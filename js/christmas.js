/**
 * Christmas
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
        this.rotateSpeed = getRandomNum(-6, 6);
        this.img.style.left = this.x + 'px';
        this.img.style.top = this.y + 'px';
        document.body.appendChild(this.img);

        /* this should call in loop update callback */
        this.update = function(dt) {
            this.y += this.moveSpeed;
            this.angle += this.rotateSpeed;
            this.img.style.top = this.y + 'px';
            this.img.style.transform = 'rotate(' + this.angle + 'deg)';
        }

        /* out of window will remove from array and body */
        this.isOutOfWindow = function() {
            return this.y > window.innerHeight + this.img.width;
        }

        /* remove obj from body */
        this.delete = function() {
            document.body.removeChild(this.img);
        }

    }

    /* Snowflake array used to manage */
    var snowflakeArray = [];

    /* load callback */
    function load() {
        // nothing to do
    }

    /* update callback */
    function update(dt) {
        /* create snowflake random */
        if (getRandomNum(0, 10) === 0) {
            snowflakeArray.push(new Snowflake());
        }
        /* update snowflake array */
        for (var n = 0; n < snowflakeArray.length; n++) {
            snowflakeArray[n].update(dt);
        }
        /* delete snowflake */
        for (var n = 0; n < snowflakeArray.length; n++) {
            if (snowflakeArray[n].isOutOfWindow()) {
                snowflakeArray[n].delete();
                snowflakeArray.splice(n, 1);
                break;
            }
        }
        /* debug now array length */
        console.debug('snowflake count : ' + snowflakeArray.length);
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
