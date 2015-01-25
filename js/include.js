/**
 * create an iframe and load target url at hash
 * like 'http://nyandoge.takwolf.com#http://blog.takwolf.com'
 */
(function() {

    var include = document.createElement("iframe");
    include.style.position = "absolute"; /* set absolute will not affect layout */
    include.frameBorder = 0;

    /* make sure that iframe is the first element in body */
    window.addEventListener("load", function() {
        if (document.body.hasChildNodes()) {
            document.body.insertBefore(include, document.body.firstChild);
        } else {
            document.body.appendChild(include);
        }
    }, false);

    /* adjust the iframe size equal to the window size */
    function adapterIFrame() {
        include.style.width = window.innerWidth + "px";
        include.style.height = window.innerHeight + "px";
    }
    adapterIFrame();
    window.addEventListener("resize", adapterIFrame, false);

    /* listen to the hash url change to load the page */
    function loadUrl() {
        include.src = window.location.hash.substr(1);
    }
    loadUrl();
    window.addEventListener("hashchange", loadUrl, false);

})();
