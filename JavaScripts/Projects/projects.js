const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
  }

const createProjectCards = (projectsArray) => {
  console.log("projectsArray", projectsArray );
  projectsArray.forEach((project) => {
    let domString = "";
    domString += `<div class='projects'>`;
    domString += `<h3>${project.id}</h3>`;
    domString += `<h2>${project.title}</h2>`;
    domString += `<p>${project.imageUrl}</p>`;
    domString += `<p>${project.description}</p>`;
    domString += `<p>${project.githubUrl}</p>`;
    domString += `</div>`;
    printToDom(domString, 'project-holder')
  })
};

function executeThisCodeIfXHRFails() {
  console.log("something isn't right");
};

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  createProjectCards(data.projects);
};

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/projects.json");
  myRequest.send();
};

startApplication();
