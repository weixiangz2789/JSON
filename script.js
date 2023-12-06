async function getData(link) {
  try {
    let response = await fetch(link);
    let data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function appendPosts(link) {
  const p = document.createElement("p");
  const data = await getData(link);
  p.textContent = data[0].name;
  document.body.append(p);
}
appendPosts("https://jsonplaceholder.typicode.com/users");
