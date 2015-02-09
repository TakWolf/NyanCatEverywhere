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
(function() {

    /*
     * create an iframe and load target url at hash
     * like 'http://nyandoge.takwolf.com#http://blog.takwolf.com'
     */

    var include = document.createElement('iframe');
    include.style.position = 'fixed';
    include.style.top = '0px';
    include.style.left = '0px';
    include.style.width = '100%';
    include.style.height = '100%';
    include.frameBorder = 0;

    /* make sure that iframe is the first element in body */
    window.addEventListener('load', function() {
        if (document.body.hasChildNodes()) {
            document.body.insertBefore(include, document.body.firstChild);
        } else {
            document.body.appendChild(include);
        }
    }, false);

    /* listen to the hash url change to load the page */
    function loadUrl() {
        if (window.location.hash === "") {
            include.src = document.referrer;
        } else {
            include.src = window.location.hash.substr(1);
        }
    }
    loadUrl();
    window.addEventListener('hashchange', loadUrl, false);

})();
