var profiles = [
  {
    firstName: "Elizabeth",
    lastName: "Holmes",
    age: new Date().getFullYear() - 1984,
    education: ["St. John University", "Stanford University"],
    img: "https://startupi.com.br/wp-content/uploads/2023/08/20160711elizabeth-holmes.jpg",
    wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes"
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    age: 48,
    education: [
      "Queens College",
      "Stanford University",
      "Wharton School of the University of Pennsylvania"
    ],
    img: "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg",
    wiki: "https://en.wikipedia.org/wiki/Elon_Musk"
  },
  {
    firstName: "Miles",
    lastName: "Morales",
    age: 17,
    education: ["Brooklyn Visions Academy"],
    img: "https://reactormag.com/wp-content/uploads/2023/06/Miles-Across-the-Spider-Verse.png",
    wiki: "https://en.wikipedia.org/wiki/Miles_Morales"
  }
];

var container = document.getElementById("staff-container");
var templateCard = container.querySelector("article");

profiles.forEach((person, index) => {
  var card = index === 0 ? templateCard : templateCard.cloneNode(true);

  card.querySelector("img").src = person.img;
  card.querySelector(".card-title").innerText =
    `${person.lastName}, ${person.firstName}`;
  card.querySelector(".card-text").innerText =
    `Year Born: ${new Date().getFullYear() - person.age}`;
  card.querySelector(".small").innerHTML =
    person.education.map(
      (school, i) => `${i + 1} College: ${school}`
    ).join("<br>");
  card.querySelector(".btn").href = person.wiki;

  if (index !== 0) {
    container.appendChild(card);
  }
});
