document.addEventListener("DOMContentLoaded", () => {
  console.log("Chargé");

  /*  elTitre = document.querySelector("title")
   mainTitle = document.querySelector("header h1")
   mainTitle.innerText += " et développement PHP" */
  const mainTitle = document.querySelectorAll("title, h1");
  mainTitle.forEach(el => el.innerText = "Développeur PHP");
});

/* let age, ville, nombre, version, chiffre
const user = 5.4

age = 15
ville = new String("Paris").length
nombre = null
version = 1.5555555555555555555555555555555555555555555555555555555555555
// console.log(parseFloat(version).toFixed(4).length)
const tabLang = ["html", 1.5, true]
console.table(tabLang)
// connaitre le chiffre paire
chiffre = 9
chiffre% 2 == 0 ? console.log("nombre paire") : console.log("nombre impaire")

age < 18 || !nombre ? console.log("Vous etes mineur") : console.log("vous etes majeur") */