async function javohir() {
  const cards = document.querySelector(".cards");
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  data.forEach((element) => {
    console.log(element);

    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerHTML = `
      <h2>${element.id}</h2>
      <h3>${element.name}</h3>
      <h4>${element.email}</h4>
      <p>${element.body}</p>`;

    cards.appendChild(comment);
  });

  console.log(data);
}

javohir();
