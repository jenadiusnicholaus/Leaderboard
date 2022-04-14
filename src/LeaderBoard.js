import Utilities from './utils.js';
import API from './Apicall.js';

export default class Leaderboad {
  static render = async (id) => {
    if (id === null) {
      document.querySelector('.loading').style.display = 'flex';
      await API.getKey();
      document.querySelector('.loading').style.display = 'none';
    } else {
      document.querySelector('.loading').style.display = 'flex';
      const ulElement = document.querySelector('.scores');
      const list = await API.leaderBoardlist(id);
      ulElement.innerHTML = '';
      let liElment = '';
      if (list.length !== 0) {
        for (let i = 0; i < list.length; i += 1) {
          liElment += `<li class="flex-d-row score"><span> ${list[i].user}</span> <span>${list[i].score}</span></li>`;
        }
        ulElement.innerHTML = liElment;
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.first-alert').style.display = 'none';
      } else {
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.first-alert').style.display = 'block';
        document.querySelector('.first-alert').style.color = 'red';
      }
    }
  }

  static refresh(refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      const id = Utilities.getFromLocalstorage('gamekey');
      await this.render(id);
    });
  }

  static createLeaderBoard(submitBtn) {
    submitBtn.addEventListener('click', async () => {
      const smsel = document.querySelector('.message');
      const user = document.getElementById('user').value;
      const score = document.getElementById('score').value;
      const id = Utilities.getFromLocalstorage('gamekey');
      if (!Utilities.isEmpty(user) && !Utilities.isEmpty(score)) {
        smsel.style.display = 'inline';
        smsel.style.color = 'red';
        smsel.textContent = 'Fields can\'t empty';
      } else {
        smsel.style.display = 'inline';
        smsel.style.color = 'green';
        smsel.textContent = 'Leaderboard score created correctly';
        await API.createGame(user, score);
        await this.render(id);
        smsel.style.display = 'none';
      }
      Utilities.clearInput('user', 'score');
    });
  }
}