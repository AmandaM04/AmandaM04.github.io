const {blogStringBuilder,} = require('./blogs');

const getAllBlogsEvent = () => {
  blogFirebaseApi.getAllBlogs()
  .then((blogsArray) => {
    blogStringBuilder(blogsArray)
  })
  .catch((error) => {
    console.error(error.message);
  });
};

module.exports = {
  getAllBlogsEvent,
};