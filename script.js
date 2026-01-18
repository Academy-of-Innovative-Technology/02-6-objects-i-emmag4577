var theranos = {
  firstName: "Elizabeth",
  lastName: "Holmes",
  age: new Date().getFullYear() - 1984,
  education: [
    "St. John University",
    "Stanford University"
  ],
  img: "https://startupi.com.br/wp-content/uploads/2023/08/20160711elizabeth-holmes.jpg",
  wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes"
};

var img = document.querySelector("img");
var title = document.querySelector(".card-title");
var ageText = document.querySelector(".card-text");
var educationText = document.querySelector(".small");
var button = document.querySelector(".btn");

img.src = theranos.img;
title.innerText = `${theranos.lastName}, ${theranos.firstName}`;
ageText.innerText = `Year Born: ${new Date().getFullYear() - theranos.age}`;

educationText.innerHTML =
  `First College: ${theranos.education[0]}<br>
   Second College: ${theranos.education[1]}`;

button.href = theranos.wiki;
