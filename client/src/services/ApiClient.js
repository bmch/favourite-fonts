export default {
  getFonts: () => {
    const URL = 'http://localhost:3001/getAPIResponse';
    return fetchRequest(URL);
  }
};

const fetchRequest = url => {
  return fetch(url)
    .then(res => (res.status <= 400 ? res : Promise.reject(res)))
    .then(res => res.json())
    .catch(error => {
      console.log(`${error.message} while fetching ${url}`);
    });
};
