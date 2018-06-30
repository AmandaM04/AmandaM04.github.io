const blogString = (blogsArray) => {
  console.log('blogsArray', blogsArray);
  blogsArray.forEach((blog) => {
    let domString = '';
    domString += `<div class='blog'>`;
    // domString += `<h3>${blog.id}</h3>`;
    domString += `<h2>${blog.title}</h2>`;
    domString += `<h3>${blog.date}</h3>`;
    domString += `<p>${blog.post}</p>`;
    domString += `</div>`;
    printToDom('#blog-holder', domString);
  });
};

const projectString = (projectsArray) => {
  console.log('projectsArray', projectsArray);
  projectsArray.forEach((project) => {
    let domStrang = '';
    domStrang += `<div class='projects'>`;
    domStrang += `<h3>${project.id}</h3>`;
    domStrang += `<h2>${project.title}</h2>`;
    domStrang += `<p>${project.imageUrl}</p>`;
    domStrang += `<p>${project.description}</p>`;
    domStrang += `<p>${project.githubUrl}</p>`;
    domStrang += `</div>`;
    printToDom('#project-holder', domStrang);
  });
};

const printToDom = (id, string) => {
  $(id).append(string);
};

module.exports = {
  blogString,
  projectString,
};
