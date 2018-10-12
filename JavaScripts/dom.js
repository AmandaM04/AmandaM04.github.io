const blogString = (blogsArray) => {
  // console.log('blogsArray', blogsArray);
  blogsArray.forEach((blog) => {
    let domString = '';
    domString += `<div class='blog'>`;
    domString += `<h3>${blog.title}</h3>`;
    domString += `<h4>${blog.date}</h4>`;
    domString += `<p>${blog.post}</p>`;
    domString += `</div>`;
    blogPrintToDom('#blog-holder', domString);
  });
};

const projectString = (projectsArray) => {
  // console.log('projectsArray', projectsArray);
  projectsArray.forEach((project) => {
    let domStrang = '';
    domStrang += `<div class='projects'>`;
    domStrang += `<h2>${project.title}</h2>`;
    domStrang += `<img class="screenshot" src="${project.thumbnail}">`;
    domStrang += `<p>Description: ${project.description}</p>`;
    domStrang += `<p>Technologies Used: ${project.technologiesUsed}</p>`;
    domStrang += `<p>Url: <a href="${project.url}">Click here!</a></p>`;
    domStrang += `<p>Github: <a href="${project.github}">Click here</a></p>`;
    domStrang += `</div>`;
    domStrang += `<div class="separator"></div>`;
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
