const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      firebaseApi.setConfig(results.firebase);
      firebase.initializeApp(results.firebase);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

module.exports = {
  retrieveKeys,
};
