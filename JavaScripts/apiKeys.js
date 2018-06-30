const { setConfig, } = require('./firebaseApi');
const { getAllBlogsEvent, getAllProjectsEvent, } = require('./events');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('../db/apiKeys.json')
      .done((data) => {
        resolve(data.firebaseKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      setConfig(results);
      firebase.initializeApp(results);
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
