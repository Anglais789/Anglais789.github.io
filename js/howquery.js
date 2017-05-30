window.onload = function () {
    if(window.innerWidth > 991)
        for (var i = 1; i < 6; i++) {
            var im = "img" + i;
            var di = "div" + i;
            var intimg = parseInt(window.getComputedStyle(document.getElementById(im)).height, 10);
            var intdiv = parseInt(window.getComputedStyle(document.getElementById(di)).height, 10);
            var val = intdiv / 2 - intimg / 2 + "px";
            document.getElementById(im).style.marginTop = val
        }
}