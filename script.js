var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container1");
var containers = document.querySelector(".list-container1");
var filter = document.querySelector(".filters");

menuIcon.onclick = function{
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container1");
    containers.classList.toggle("large-list-container1");
    filter.classList.toggle("large-filters");
}

