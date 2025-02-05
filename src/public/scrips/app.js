let apps = document.getElementsByClassName('appIcon');

for (let i = 0; i < apps.length; i++) {
    apps[i].addEventListener('click', (_) => {openApp(apps[i].classList[1]);});
}

function openApp(name) {
    currentApp = name;
    if (currentPage == 0) {
        leftNav();
    }
    if (currentPage == 1) {
        rightNav();
    }
    fixCurrentPage();
    console.log(currentPage);
}