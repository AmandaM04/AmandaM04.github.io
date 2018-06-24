let fireBaseConfig = {};
// let uid = '';

const setConfig = (fbConfig) => {
  fireBaseConfig = fbConfig;
};

// const setUID = (newUID) => {
//   uid = newUID;
// };

// const saveProject = (newProject) => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       method: 'POST',
//       url: `${fireBaseConfig.databaseURL}/projects.json`,
//       data: JSON.stringify(newProject),
//     })
//       .done((uniqueKey) => {
//         resolve(uniqueKey);
//       })
//       .fail((error) => {
//         reject(error);
//       });
//   });
// };

const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    const allProjectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${fireBaseConfig.databaseURL}/projects.json`,
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
  // saveBlog,
  setConfig,
  getAllProjects,
};
