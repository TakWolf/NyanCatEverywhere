/*
 * Copyright 2015-2016 TakWolf
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * create an iframe and load target url at hash
 * like 'http://nyandoge.takwolf.com#http://blog.takwolf.com'
 */
(function() {

    var include = document.createElement('iframe');
    include.style.position = 'fixed'; /* set fixed will not affect layout */
    include.frameBorder = 0;

    /* make sure that iframe is the first element in body */
    window.addEventListener('load', function() {
        if (document.body.hasChildNodes()) {
            document.body.insertBefore(include, document.body.firstChild);
        } else {
            document.body.appendChild(include);
        }
    }, false);

    /* adjust the iframe size equal to the window size */
    function adjustSize() {
        include.style.top = '0px';
        include.style.left = '0px';
        include.width = window.innerWidth;
        include.height = window.innerHeight;
    }
    adjustSize();
    window.addEventListener('resize', adjustSize, false);

    /* listen to the hash url change to load the page */
    function loadUrl() {
        include.src = window.location.hash.substr(1);
        if (include.src === null) {
            include.src = document.referrer;
        }
    }
    loadUrl();
    window.addEventListener('hashchange', loadUrl, false);

})();
