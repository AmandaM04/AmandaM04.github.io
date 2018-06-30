let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    const allBlogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs.json`,
    })
      .done((allBlogsObject) => {
        if (allBlogsObject !== null) {
          Object.keys(allBlogsObject).forEach((fbKey) => {
            allBlogsObject[fbKey].id = fbKey;
            allBlogsArray.push(allBlogsObject[fbKey]);
          });
        }
        resolve(allBlogsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    const allProjectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projects/projects.json`,
    })
      .done((allProjectsObject) => {
        if (allProjectsObject !== null) {
          Object.keys(allProjectsObject).forEach((fbKey) => {
            allProjectsObject[fbKey].id = fbKey;
            allProjectsArray.push(allProjectsObject[fbKey]);
          });
        }
        resolve(allProjectsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  getAllBlogs,
  getAllProjects,
};
