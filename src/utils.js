class Utilities {
    static baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

    static subUrl = (id = null) => ({
      games: 'games/',
      withgamesId: `games/${id}/scores/`,
    })

    // save to local storage
    static saveToLocalStorage = (key, value) => {
      if (key !== null && value !== null) localStorage.setItem(key, value);
    }

    // get from local storage
    static getFromLocalstorage = (key) => (key !== null ? localStorage.getItem(key) : null)

    // get request heaader
    static getHeader= (type, value) => {
      const requestHeaders = new Headers();
      requestHeaders.append(type, value);
      return requestHeaders;
    }

    // get request encodede parameter
    static urlEncodeParms = () => {
      const urlencoded = new URLSearchParams();
      urlencoded.append('name', 'LearderBoard');
      return urlencoded;
    }

    static getMethod = (methodName) => methodName

    static exception = (message) => message

    static requestOptions = (methods, headers, urlencodedParams) => {
      const requestOps = {
        method: methods,
        headers,
        body: urlencodedParams,
        redirect: 'follow',
      };
      return requestOps;
    }

static isEmpty = (eleveValue) => {
  if (eleveValue === '') return false;
  return true;
}

static clearInput = (...args) => {
  const [user, score] = args;
  document.getElementById(user).value = '';
  document.getElementById(score).value = '';
}
}

export default Utilities;