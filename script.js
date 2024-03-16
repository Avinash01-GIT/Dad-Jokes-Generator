let btn = document.getElementById("btn");
let jokeDOM = document.getElementById("joke");

let joke = "";

btn.addEventListener("click", jokeGenerator);

function jokeGenerator() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.api-ninjas.com/v1/dadjokes?limit=1");
  xhr.setRequestHeader("X-Api-Key", "nKS18HPWS7vGnYLRA2iT5Q==YEO2x808ZPVvNiaa");
  xhr.send();

  btn.innerText = "Joke";
  jokeDOM.innerText = "😉";

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
      const result = JSON.parse(xhr.responseText);
      joke = result[0].joke;
      console.log(joke);
      jokeDOM.innerText = joke;
      btn.innerText = "Tell me a joke!!!";
    }
  };
}
