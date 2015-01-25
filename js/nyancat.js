/**
 * nyan nyan cat !
 * ~ o( >_< )o ~
 */
(function() {

    /* create a container */
    var container = document.createElement("div");
    container.style.position = "absolute";

    window.addEventListener("load", function() {
        document.body.appendChild(container);
    }, true);

    function adjustSize() {
        container.style.width = window.innerWidth + "px";
        container.style.height = window.innerHeight + "px";
    }
    adjustSize();
    window.addEventListener("resize", adjustSize, false);

    /* begin to nyan ~ */
    var img = document.createElement("img");
    img.src = "img/nyancat.gif";
    container.appendChild(img);






})();
