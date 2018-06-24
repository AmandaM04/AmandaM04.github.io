const { blogStringBuilder, } = require('./blogs');
const { getAllBlogs, } = require('./blogFirebaseApi');

const getAllBlogsEvent = () => {
  getAllBlogs()
    .then((blogsArray) => {
      blogStringBuilder(blogsArray);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

module.exports = {
  getAllBlogsEvent,
};
