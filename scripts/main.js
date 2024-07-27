
var themeIndex = 0;
var themeClassNames = [
    'theme-a',
    'theme-b',
    'theme-c',
]

window.onload = () => {
    // Select the element we want to process events on
    var appContainerElement = document.getElementById("app-container");
    
    // Add an onClick handler to our selected element
    appContainerElement.onclick = () => {
        // calculate next theme index 
        var themeIndexNext = themeIndex;
        if (themeIndexNext + 1 === themeClassNames.length) {
            themeIndexNext = 0;
        } else {
            themeIndexNext += 1;
        }

        // get the current and next classname
        var currentClassName = themeClassNames[themeIndex];
        var nextClassName = themeClassNames[themeIndexNext];
    
        // replace the theme className on the element
        appContainerElement.classList.replace(currentClassName, nextClassName);

        // update the theme index
        themeIndex = themeIndexNext;
    }
}