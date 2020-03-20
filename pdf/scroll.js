let startingPost = 0;

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargins: "0px",
    threshold: 0.75
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(document.querySelector("footer"));
  getData();
});

function handleIntersect(entries) {
  if (entries[0].isIntersecting && startingPost <= 100) {
    console.log("something is intersecting with the viewport");
    startingPost = startingPost + 10;
    getData();
  }
}

function getData() {
  let main = document.querySelector("main");
  let limit = 10;

  fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${startingPost}&_limit=${limit}`
  )
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        let post = document.createElement("div");
        let title = document.createElement("h3");
        title.textContent = element.title;
        let body = document.createElement("p");
        body.textContent = element.body;

        post.appendChild(title);
        post.appendChild(body);

        main.appendChild(post);
      });
    });
}
