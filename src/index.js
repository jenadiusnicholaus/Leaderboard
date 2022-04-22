import './style.css';
import Utilities from './utils.js';
import Leaderboad from './LeaderBoard.js';

const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit');

// refresh
Leaderboad.refresh(refreshBtn);

// create game name
Leaderboad.createLeaderBoard(submitBtn);

window.addEventListener('load', async () => {
  const id = Utilities.getFromLocalstorage('gamekey');
  await Leaderboad.render(id);
});
