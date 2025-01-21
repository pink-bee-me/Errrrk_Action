//Cash the list and the items
const list = document.getElementById("navList");
const items = document.getElementsByClassName("navItem");
const links = document.getElementsByClassName("navLink")

//Add one listener to the list element
list.addEventListener("click", handleClick);

//If the Clicked element is a link, remove all the active classes from the links
//And then, Add the active class to the link that was clicked on

function handleClick(e) {
    if(e.target.matches("a")) {
        links.forEach(link => link.classList.remove("active"));
        e.target.classList.add("active");
    }
}