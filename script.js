async function getData(link) {
  try {
    let response = await fetch(link); // Fetch data from our link
    let data = await response.json(); // Parses json and converts it to js object
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function appendPosts(link) {
  const data = await getData(link); //
  for (let i = 0; i < 10; i++) {
    const divElement = document.createElement("div");
    const spanElement = document.createElement("span");
    let string = data[i].name + " - ";
    string += data[i].username + " - ";
    string += data[i].email + " - ";
    string += data[i].website; // Create a string containing all the data i want to display
    spanElement.textContent = string;
    divElement.appendChild(spanElement); // Set the span element's text content to the string and then append it to the div
    document.body.appendChild(divElement);
  }
}
appendPosts("https://jsonplaceholder.typicode.com/users");
