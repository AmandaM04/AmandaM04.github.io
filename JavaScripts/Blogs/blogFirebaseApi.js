let fireBaseConfig = {};
// let uid = '';

const setConfig = (fbConfig) => {
  fireBaseConfig = fbConfig;
};

// const setUID = (newUID) => {
//   uid = newUID;
// };

// const saveBlog = (newBlog) => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       method: 'POST',
//       url: `${fireBaseConfig.databaseURL}/blogs.json`,
//       data: JSON.stringify(newBlog),
//     })
//       .done((uniqueKey) => {
//         resolve(uniqueKey);
//       })
//       .fail((error) => {
//         reject(error);
//       });
//   });
// };

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    const allBlogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${fireBaseConfig.databaseURL}/blogs.json`,
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

module.exports = {
  // saveBlog,
  setConfig,
  getAllBlogs,
};