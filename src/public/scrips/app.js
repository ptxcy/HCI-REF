let apps = document.getElementsByClassName('appIcon');

for (let i = 0; i < apps.length; i++) {
    apps[i].addEventListener('click', openApp);
}

function openApp(e) {
    this.classList.add('move');
}