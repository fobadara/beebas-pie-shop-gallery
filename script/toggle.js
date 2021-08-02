"use strict";
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
}

let hamburger = document.getElementById('hamburgerBtn')
hamburger.onclick = toggleMenu;