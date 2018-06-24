const { createProjectCards, } = require('./projects');
const {getAllProjects, } = require('./projectFirebaseApi');

const getAllProjectsEvent = () => {
  getAllProjects()
    .then((projectsArray) => {
      createProjectCards(projectsArray);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

module.exports = {
  getAllProjectsEvent,
};
