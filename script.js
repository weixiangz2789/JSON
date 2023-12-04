async function getData(link) {
  try {
    let response = await fetch(link);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function appendPosts(obj) {
  const p = document.createElement("p");
  p.textContent = obj[0].name;
  document.body.append(p);
}
appendPosts(getData("https://jsonplaceholder.typicode.com/users"));
