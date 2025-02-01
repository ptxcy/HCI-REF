
let hotbar = document.getElementById('hotbar');
let arrowRight = document.getElementsByClassName('arrow-container right')[0];
let arrowLeft = document.getElementsByClassName('arrow-container left')[0];

let hotbarOpen = false;

let pages = ["selection", "clear", "app"];
let currentPage = 1;

function fixCurrentPage() {
    if (currentPage < 0) {
        currentPage = pages.length - 1;
    } else if (currentPage >= pages.length) {
        currentPage = 0;
    }
    console.log(currentPage);
}

function rightNav() {
    currentPage++;
    fixCurrentPage();
}

function leftNav() {
    currentPage--;
    fixCurrentPage();
}

function topNav() {
    
}


arrowRight.addEventListener('click', rightNav);
arrowLeft.addEventListener('click', leftNav);
hotbar.addEventListener('click', topNav);