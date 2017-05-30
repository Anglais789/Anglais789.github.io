// Get the modal
var modal1 = document.getElementById('Modal_Cardboard');
var modal2 = document.getElementById('Modal_HTC');
var modal3 = document.getElementById('Modal_Oculus');
var modal4 = document.getElementById('Modal_Playstation');
var modal5 = document.getElementById('Modal_Gear');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function cardboard() {
    modal1.style.display = "block";
}

function htc() {
    modal2.style.display = "block";
}

function oculus() {
    modal3.style.display = "block";
}

function playstation() {
    modal4.style.display = "block";
}

function gear() {
    modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1 ||
        event.target == modal2 ||
        event.target == modal3 ||
        event.target == modal4 ||
        event.target == modal5) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
    }
}