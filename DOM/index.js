var images = [
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFO7GXQYphMPk8KgUDe_cBFyUjUByXfheY0BGSxKFGBYTqgUy7Sp8gSrFg_IKD9JSByNo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJZphOUQzHnYmTluzWDdbA0UIx4jP78COvTTWKfn0Y0m30e8BZWuOPR6Stzx4_hdPTsM&usqp=CAU",

]

var num = 0;

function next() {
    var slider = document.getElementById("slider")
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num]
}

function prev() {
    var slider = document.getElementById("slider")
    num--;
    if(num < 0){
        num = images.length-1
    }
    slider.src = images[num]
}