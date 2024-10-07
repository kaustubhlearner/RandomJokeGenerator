let jokeupdate = document.getElementById("joke");
let btn =document.getElementById("btn");

const link ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let newjoke = () =>{
     fetch(link).then(data => data.json())
     .then(items =>{
        jokeupdate.textContent = `${items.joke}`
     });
}
