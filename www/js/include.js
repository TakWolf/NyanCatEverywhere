
const include = document.createElement('iframe')
include.style.position = 'fixed'
include.style.left = '0'
include.style.top = '0'
include.style.width = '100%'
include.style.height = '100%'
include.frameBorder = '0'
if (document.body.hasChildNodes()) {
    document.body.insertBefore(include, document.body.firstChild)
} else {
    document.body.appendChild(include)
}

function loadUrl() {
    if (window.location.hash === '') {
        include.src = document.referrer
    } else {
        include.src = window.location.hash.substring(1)
    }
}
loadUrl()
window.addEventListener('hashchange', loadUrl, false)
