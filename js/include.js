(function() {

    var include = document.createElement("iframe");
    include.style.position = "absolute";
    include.frameBorder = 0;
    document.body.appendChild(include);

    function adapterIFrame() {
        include.style.width = window.innerWidth + "px";
        include.style.height = window.innerHeight + "px";
    }
    adapterIFrame();
    window.addEventListener("resize", adapterIFrame, false);

    function loadUrl() {
        include.src = window.location.hash.substr(1);
    }
    loadUrl();
    window.addEventListener("hashchange", loadUrl, false);

})();