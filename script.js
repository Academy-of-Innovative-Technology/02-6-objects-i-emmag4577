var theranos = {
	first: "Elizabeth",
	last: "Holmes",
	year: 1984,
	college: [
		"St. John University", "Stanford University"
	],
	img: "https://startupi.com.br/wp-content/uploads/2023/08/20160711elizabeth-holmes.jpg",
    wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes"
};

titles[0].innerText = `${theranos.lastName}, ${theranos.firstName}`;
let currentYear = new Date().getFullYear();
texts[0].innerText = `Year Born: ${currentYear - theranos.age}`;
texts[1].innerHTML =
  `First College: ${theranos.education[0]}<br>
   Second College: ${theranos.education[1]}`;

imgs[0].src = theranos.img;
buttons[0].href = theranos.wiki;

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
