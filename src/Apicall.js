import Utilities from './utils.js';

class API {
    static getKey = async () => {
      const headers = Utilities.getHeader('Content-Type', 'application/x-www-form-urlencoded');
      const urlencodedParams = Utilities.urlEncodeParms();
      const method = Utilities.getMethod('POST');
      const requestOptions = Utilities.requestOptions(method, headers, urlencodedParams);
      const url = Utilities.baseUrl + Utilities.subUrl().games;
      try {
        const response = await fetch(url, requestOptions);
        if (response.ok) {
          const decodedResponse = await response.json();
          const gameKey = decodedResponse.result.split(' ')[3];
          Utilities.saveToLocalStorage('gamekey', gameKey);
          return gameKey;
        }
        throw new Error(`HTTP error: ${response.status}`);
      } catch (e) {
        return Utilities.exception(e);
      }
    }

    //  create  game
    static createGame = async (user, score) => {
      const headers = Utilities.getHeader('Content-Type', 'application/x-www-form-urlencoded');
      const method = Utilities.getMethod('POST');
      // Todo
      const urlencoded = new URLSearchParams();
      urlencoded.append('user', user);
      urlencoded.append('score', score);

      const requestOptions = Utilities.requestOptions(method, headers, urlencoded);
      const id = Utilities.getFromLocalstorage('gamekey');
      const url = Utilities.baseUrl + Utilities.subUrl(id).withgamesId;
      try {
        const response = await fetch(url, requestOptions);
        if (response.ok) {
          const decodedResponse = await response.json();
          return decodedResponse.result;
        }
        throw new Error(`HTTP error: ${response.status}`);
      } catch (e) {
        return Utilities.exception(e);
      }
    }

        // list of beaderBoard
        static leaderBoardlist = async (id) => {
          const requestOptions = {
            method: Utilities.getMethod('GET'),
          };
          const url = Utilities.baseUrl + Utilities.subUrl(id).withgamesId;
          try {
            const response = await fetch(url, requestOptions);
            if (response.ok) {
              const decodedResponse = await response.json();
              return decodedResponse.result;
            }
            throw new Error(`HTTP error: ${response.status}`);
          } catch (e) {
            return Utilities.exception(e);
          }
        }
}

export default API;
