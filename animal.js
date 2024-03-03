const stringifiedAnimal = localStorage.getItem("currentAnimal");
let selectedAnimal = JSON.parse(stringifiedAnimal);
let theAnimal = animals.filter((animal) => animal === selectedAnimal);

function getAnimalHTML(animal) {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper-animal";
  wrapper.innerHTML = `<div id="image">
        <img src=${animal.image} alt=${animal.name}/><!-- show here the animal image -->
      </div>
      <div>
        <h1 id="name">${animal.name}</h1>
        <p id="weight">${animal.weight}</p>
        <p id="height">${animal.height}</p>
        <p id="color">${animal.color}</p>
        <p id="habitat">${animal.habitat}</p>
        <p id="isPredator">${animal.isPredator}</p>
      </div>`;

  return wrapper;
}

function renderAnimal() {
  //הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
  // רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי
  const animalHTML = getAnimalHTML(theAnimal);
  const animalPlaceHolder = document.getElementById("placeHolder");
  animalPlaceHolder.innerHTML = "";
  animalPlaceHolder.append(animalHTML);
}
function renderRelatedAnimals() {
  // ממשו את הלוגיקה שמרנדרת כרטיסיות של החיות ששדה ההאביטט שלהם זהה לחיה שמוצגת
  // רנדרו אותן לתוך הדיב שמיועד להן עם האיידי related-animals
  // ממשו את אותה לוגיקה של כרטיסיית חיה כמו בכרטיסיות בעמוד zoo.html
}

function feedAnimal() {
  // ממשו את הלוגיקה של האכלת חיה
  // במידה ואין מספיק מטבעות, טפלו בהתאם להנחיות במטלה
}

function visitorGotEaten() {
  // ממשו את הלוגיקה של חיה שטורפת אורח
}

function animalEscaped() {
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות
}

window.addEventListener("load", renderAnimal);
