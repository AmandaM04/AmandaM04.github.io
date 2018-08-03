const { getAllBlogs, getAllProjects, } = require('./firebaseApi');
const { blogString, projectString, } = require('./dom');

const getAllBlogsEvent = () => {
  getAllBlogs()
    .then((blogsArray) => {
      blogString(blogsArray);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

const getAllProjectsEvent = () => {
  getAllProjects()
    .then((projectsArray) => {
      projectString(projectsArray);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

// const initializer = () => {
//   getAllBlogsEvent();
//   getAllProjectsEvent();
// };

module.exports = {
  getAllBlogsEvent,
  getAllProjectsEvent,
};
