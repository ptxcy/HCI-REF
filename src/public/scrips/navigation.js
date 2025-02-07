
const hotbar = document.getElementById('hotbar');
const appSelection = document.getElementsByClassName('appDisplay')[0];
const appDisplay = document.getElementsByClassName('app')[0];
const arrowRight = document.getElementsByClassName('arrow-container right')[0];
const arrowLeft = document.getElementsByClassName('arrow-container left')[0];
const arrowTop = document.getElementsByClassName('arrow-container up')[0];

let hotbarOpen = false;
hotbar.style.display = "none";
let pages = ["selection", "clear", "app"];
let currentPage = 1;
let currentApp = "TrackIt";
fixCurrentPage();

function fixCurrentPage() {
    if (currentPage < 0) {
        currentPage = pages.length - 1;
    } else if (currentPage >= pages.length) {
        currentPage = 0;
    }
    newPageAdjustments();
    console.log(currentPage);
}

function newPageAdjustments() {
    if (currentPage == 2) {
        if (currentApp == "weTouri") {
            document.body.style.backgroundImage = 'url("/images/weTouriBackground.png")';
        }
        else if (currentApp == "TrackIt") {
            document.body.style.backgroundImage = 'url("/images/trackItBackground.png")';
        }
        else {
            document.body.style.backgroundImage = 'url("/images/background.jpeg")';
        }
    }
    else {
        document.body.style.backgroundImage = 'url("/images/background.jpeg")';
    }

    document.styleSheets[5].cssRules[0].style.display = currentApp == "TrackIt" ? "" : "none";
    document.styleSheets[6].cssRules[0].style.display = currentApp == "health" ? "" : "none";
    document.styleSheets[7].cssRules[0].style.display = currentApp == "soundtracks" ? "" : "none";
}

function setAppDisplayAnimation(element, animation) {
    element.classList.remove('appDisplayToLeft');
    element.classList.remove('appDisplayToRight');
    element.classList.remove('appDisplayFromLeft');
    element.classList.remove('appDisplayFromRight');
    element.classList.add(animation);
}

function rightNav() {
    if (currentPage == 0) {
        setAppDisplayAnimation(appSelection, 'appDisplayToLeft');
    }
    if (currentPage == 2) {
        setAppDisplayAnimation(appDisplay, 'appDisplayToLeft');
    }
    currentPage++;
    fixCurrentPage();
    if (currentPage == 0) {
        setAppDisplayAnimation(appSelection, 'appDisplayFromRight');
    }
    if (currentPage == 2) {
        setAppDisplayAnimation(appDisplay, 'appDisplayFromRight');
    }
}

function leftNav() {
    if (currentPage == 0) {
        setAppDisplayAnimation(appSelection, 'appDisplayToRight');
    }
    if (currentPage == 2) {
        setAppDisplayAnimation(appDisplay, 'appDisplayToRight');
    }
    currentPage--;
    fixCurrentPage();
    if (currentPage == 0) {
        setAppDisplayAnimation(appSelection, 'appDisplayFromLeft');
    }
    if (currentPage == 2) {
        setAppDisplayAnimation(appDisplay, 'appDisplayFromLeft');
    }
}

function topNav() {
    hotbar.style.display = "flex";
    hotbar.classList.add('hotbarIn');
    arrowTop.style.display = "none";
}


arrowRight.addEventListener('click', rightNav);
arrowLeft.addEventListener('click', leftNav);
arrowTop.addEventListener('click', topNav);
