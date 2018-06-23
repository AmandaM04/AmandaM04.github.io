const {getAllBlogsEvent,} = require('../blogEvents');
const {getAllProjectsEvent,} = require('../projectEvents');

const initializer = () => {
  getAllBlogsEvent();
  getAllProjectsEvent();
};

module.exports = initializer;