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
    blogPrintToDom('#blog-holder', domString);
  });
};

const projectString = (projectsArray) => {
  console.log('projectsArray', projectsArray);
  projectsArray.forEach((project) => {
    let domStrang = '';
    domStrang += `<div class='projects'>`;
    // domStrang += `<h3>${project.id}</h3>`;
    domStrang += `<h2>${project.title}</h2>`;
    domStrang += `<p>${project.thumbnail}</p>`;
    domStrang += `<p>${project.description}</p>`;
    domStrang += `<p>${project.technologiesUsed}</p>`;
    domStrang += `<p>${project.url}</p>`;
    domStrang += `<p>${project.github}</p>`;
    domStrang += `</div>`;
    ProjectsPrintToDom('#project-holder', domStrang);
  });
};

const blogPrintToDom = (id, string) => {
  $(id).append(string);
};

const ProjectsPrintToDom = (id, string) => {
  $(id).append(string);
};

module.exports = {
  blogString,
  projectString,
};
