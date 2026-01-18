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

var elonMusk = {
  firstName: "Elon",
  middleName: "Reeve",
  lastName: "Musk",
  age: 48,
  education: [
    "Queens College",
    "Stanford University",
    "Wharton School of the University of Pennsylvania"
  ],
  img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society_%28crop2%29.jpg",
  wiki: "https://en.wikipedia.org/wiki/Elon_Musk"
};

var hero = {
  firstName: "Miles",
  middleName: "G",
  lastName: "Morales",
  age: 17,
  education: [
    "Brooklyn Visions Academy"
  ],
  occupation: "Superhero",
  skills: ["Web-slinging", "Invisibility", "Combat"],
  hometown: "Brooklyn, NY",
  comic: "Spider-Man: Miles Morales",
  img: "https://upload.wikimedia.org/wikipedia/en/3/32/Miles_Morales_%28Spider-Man%29.png",
  wiki: "https://en.wikipedia.org/wiki/Miles_Morales"
};
var profiles = [theranos, elonMusk, hero];

profiles.forEach((person, index) => {
  imgs[index].src = person.img;
  titles[index].innerText = `${person.lastName}, ${person.firstName}`;
  texts[index * 2].innerText =
    `Year Born: ${new Date().getFullYear() - person.age}`;
  texts[index * 2 + 1].innerHTML = person.education
    .map((school, i) => `${i + 1} College: ${school}`)
    .join("<br>");
  buttons[index].href = person.wiki;
});