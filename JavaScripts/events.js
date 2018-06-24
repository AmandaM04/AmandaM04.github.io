const { getAllBlogsEvent, } = require('./Blogs/blogEvents');
const { getAllProjectsEvent, } = require('./Projects/projectEvents');

const initializer = () => {
  getAllBlogsEvent();
  getAllProjectsEvent();
};

module.exports = initializer;
