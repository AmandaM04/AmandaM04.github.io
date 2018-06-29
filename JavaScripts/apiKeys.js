const { setConfig, } = require('./firebaseApi');
const { getAllBlogsEvent, getAllProjectsEvent, } = require('./events');

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
      setConfig(results.firebase);
      firebase.initializeApp(results.firebase);
      getAllBlogsEvent();
      getAllProjectsEvent();
    })
    .catch((error) => {
      console.error(error.message);
    });
};

module.exports = {
  retrieveKeys,
};
