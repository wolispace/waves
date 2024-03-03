// clear out any url params
window.history.replaceState({}, document.title, window.location.pathname);


// all of the events..
document.addEventListener('DOMContentLoaded', function () {
  startGame();
});

function startGame() {
  console.log('game started');
}