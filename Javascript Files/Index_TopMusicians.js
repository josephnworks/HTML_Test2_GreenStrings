/*Artist Slides on Home Page*/
var MusicianSlideIndex = 1;
showMusicians(MusicianSlideIndex);

function plusMusicians(n) {
    showMusicians(MusicianSlideIndex += n);
}

function showMusicians(n) {
    var i;
    var x = document.getElementsByClassName("MusicianSlidesHome");
    if (n > x.length) {MusicianSlideIndex = 1}
    if (n < 1) {MusicianSlideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[MusicianSlideIndex-1].style.display = "block";
}
