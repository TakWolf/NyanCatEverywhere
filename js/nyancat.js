/**
 * nyan nyan cat !
 */
(function() {

    /* load callback */
    function load() {

    }

    /* update callback */
    function update(dt) {

    }

    /* in load callback to make sure body is exist */
    window.addEventListener("load", function() {
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
