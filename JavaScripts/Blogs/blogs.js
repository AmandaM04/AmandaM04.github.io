const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
}

const blogStringBuilder = (blogsArray) => {
  blogsArray.forEach((blog) => {
    let domString = "";
    domString += `<div class='blog'>`;
    domString += `<h3>${blog.id}</h3>`;
    domString += `<h2>${blog.title}</h2>`;
    domString += `<h3>${blog.date}</h3>`;
    domString += `<p>${blog.post}</p>`;
    domString += `</div>`;
    printToDom(domString, 'blog-holder')
  })
};

function executeThisCodeIfXHRFails() {
  console.log("something isn't right");
};

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  blogStringBuilder(data.blogs);
};

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/blogs.json");
  myRequest.send();
};

startApplication();