function showRight() {
    var elem = document.querySelector(".right-pane")
    var dot = document.querySelector(".red")
    var margin = document.querySelector(".right-middle")
    elem.style.width = '350px'
    margin.style.marginRight = '350px';
    setTimeout( function() {
        if (dot.classList) {
            dot.classList.remove("red-scale")
        } 
    }, 500)
    

}

function hideRight() {
    var elem = document.querySelector(".right-pane")
    var dot = document.querySelector(".red")
    var margin = document.querySelector(".right-middle")
    dot.className += " red-scale"
    setTimeout( function() {
    elem.style.width = '0'
    margin.style.marginRight = '0';
    }, 500)
}

function viewImage() {
    var elem = document.querySelector(".big-image")
    elem.style.top = "0"
}

function hideImage() {
    var elem = document.querySelector(".big-image")
    elem.style.top = "-100%"
}
  