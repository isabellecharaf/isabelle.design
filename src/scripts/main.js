console.log("hello world");

var skyBlue = "#5CA4D6";
var huntyGreen = "#3F4A22";
var bgColorIndex = 0;

var funkyBgColors = [
    skyBlue, 
    huntyGreen,
    'tomato'
]

window.onload = () => {
    console.log("loaded");
    document.body.onclick = () => {

        console.log("clicked body");
        var nextBgColor = funkyBgColors[bgColorIndex] 
        document.getElementsByTagName("body")[0].style.background = nextBgColor;
        console.log(nextBgColor);
        bgColorIndex = bgColorIndex + 1;

        if (bgColorIndex == 3) {
         bgColorIndex = 0;
        }
    }

}