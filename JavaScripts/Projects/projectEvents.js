const {createProjectCards,} = require('./projects');

const getAllProjectsEvent = () => {
  projectFirebaseApi.getAllProjects()
  .then((projectsArray) => {
    createProjectCards(projectsArray)
  })
  .catch((error) => {
    console.error(error.message);
  });
};

module.exports = {
  getAllProjectsEvent,
};