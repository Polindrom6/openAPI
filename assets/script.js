function createPostHTML(post) {
  return `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
}

function addPostToContainer(container, postHTML) {
  container.insertAdjacentHTML("beforeend", postHTML);
}

function loadPosts() {
  const container = document.getElementById("posts-container");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const postHTML = createPostHTML(post);
        addPostToContainer(container, postHTML);
      });
    })
    .catch((error) => {
      console.error("Error loading posts:", error);
    });
}
window.addEventListener("DOMContentLoaded", loadPosts);
