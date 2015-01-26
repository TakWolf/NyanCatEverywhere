/**
 * nyan nyan cat !
 */
(function() {

    var label = document.getElementById('label');

    /* load callback */
    function load() {
        // nothing to do
    }

    /* update callback */
    function update(dt) {
        label.innerText = 'This is a example page. FPS : ' + Math.floor(1 / dt);
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
