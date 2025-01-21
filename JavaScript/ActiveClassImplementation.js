
// get the container element
var navBar = document.getElementById("#navBar");

//get all the buttons (or <a> link tags) inside the container
var btns= navList.getElementsByClassName(".btn");

// loop through the buttons and add the active class to the current/clicked button
for(var i=0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";    
});
}