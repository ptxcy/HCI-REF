const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const muteButton = document.getElementById('muteButton');
const unmuteButton = document.getElementById('unmuteButton');

pauseButton.style.display = 'none';
unmuteButton.style.display = 'none';

playButton.addEventListener('click', () => {
  playButton.style.display = 'none';
  pauseButton.style.display = '';
});

pauseButton.addEventListener('click', () => {
  pauseButton.style.display = 'none';
  playButton.style.display = '';
});

muteButton.addEventListener('click', () => {
  muteButton.style.display = 'none';
  unmuteButton.style.display = '';
});

unmuteButton.addEventListener('click', () => {
  unmuteButton.style.display = 'none';
  muteButton.style.display = '';
});