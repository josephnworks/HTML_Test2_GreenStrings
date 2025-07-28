/*Albums/Singles Slides on Home Page*/
var ASIndex = 1;
showAS(ASIndex);

function plusAS(n) {
    showAS(ASIndex += n);
}

function showAS(n) {
    var i;
    var x = document.getElementsByClassName("ASHome");
    if (n > x.length) {ASIndex = 1}
    if (n < 1) {ASIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[ASIndex-1].style.display = "block";
}