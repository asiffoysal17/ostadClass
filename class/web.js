//  Get

document.getElementById("getBtn").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      const list = document.getElementById("postlist");
      list.innerHYML = "";
      data.forEach((post) => {
        const li = document.createElement("li");
        li.innerHTML = `<h6>${post.title}</h6>`;
        list.appendChild(li);
      });
    });
});

// post

document.getElementById("postBtn").addEventListener(`click`, () => {
  const title = document.getElementById("title").value;
  const body = document.getElementById("bodyText").value;
  const data = {
    title,
    body,
    userId: 1,
  };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Post Created with Id: " + data.id);
    });
});

// put

document.getElementById("putBtn").addEventListener("click", () => {
  const id = document.getElementById("updatedId").value;
  const title = document.getElementById("updatedTitle").value;

  fatch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: `PUT`,
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ title, body: "updated body", userId: 1 }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Post Updated: " + data.id);
      console.log("PUT", data);
    });
});

// delete

document.getElementById("deleteBtn").addEventListener("click", () => {
  const id = document.getElementById("deletedId").value;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  }).then((res) => console.log("deleted"));
});

// file uplode

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = document.getElementById("fileInput").files[0];
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("https://localhost:5000/upload", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  console.log(data);
});
