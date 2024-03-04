const stringifiedAnimal = localStorage.getItem("currentAnimal");
let selectedAnimal = JSON.parse(stringifiedAnimal);

function getAnimalHTML(animal) {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper-animal";
  wrapper.innerHTML = `<div id="image">
        <img src=${animal.image} alt=${animal.name}/><!-- show here the animal image -->
      </div>
      <div>
        <h1 id="name">${animal.name}</h1>
        <p id="weight">Weight: ${animal.weight}</p>
        <p id="height">Height: ${animal.height}</p>
        <p id="color">Color: ${animal.color}</p>
        <p id="habitat">Habitat: ${animal.habitat}</p>
        <p id="isPredator">Is Predator: ${animal.isPredator}</p>
      </div>`;

  const button = document.getElementById("feed-animal");
  button.addEventListener("click", () => feedAnimal());
  return wrapper;
}

function renderAnimal() {
  //הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
  // רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי
  const animalHTML = getAnimalHTML(selectedAnimal);
  const animalPlaceHolder = document.getElementById("placeholder");
  animalPlaceHolder.innerHTML = "";
  animalPlaceHolder.append(animalHTML);
}

function renderRelatedAnimals() {
  // ממשו את הלוגיקה שמרנדרת כרטיסיות של החיות ששדה ההאביטט שלהם זהה לחיה שמוצגת
  // רנדרו אותן לתוך הדיב שמיועד להן עם האיידי related-animals
  // ממשו את אותה לוגיקה של כרטיסיית חיה כמו בכרטיסיות בעמוד zoo.html
}

let stringifiedVisitor = localStorage.getItem("currentVisitor");
let selectedVisitor = JSON.parse(stringifiedVisitor);

function feedAnimal() {
  // ממשו את הלוגיקה של האכלת חיה
  // במידה ואין מספיק מטבעות, טפלו בהתאם להנחיות במטלה
  if (selectedVisitor.coins >= 2) {
    //pop up
    // window.alert(
    //   `Thank you for feeding the ${selectedAnimal.name}! Give me the money!`
    // );
    //fix selectedVisitor coins
    selectedVisitor.coins = selectedVisitor.coins - 2;
    //fix currentVisitor coins using selectedVisitor
    stringifiedVisitor = JSON.stringify(selectedVisitor);
    stringifiedVisitor = localStorage.setItem(
      "currentVisitor",
      stringifiedVisitor
    );
    visitors = JSON.parse(localStorage.getItem("visitors")); //מעדכנות את המערך לפי מה שיש בלוקל סטורג
    //fix visitors coins array
    for (let i = 0; i < visitors.length; i++) {
      if (selectedVisitor.name === visitors[i].name) {
        visitors[i].coins = selectedVisitor.coins;
      }
    }
    //fix visitors coins in local sotarge
    localStorage.setItem("visitors", JSON.stringify(visitors));
  } else {
    if (selectedAnimal.isPredator === true) {
      //console.log("we are about to be eaten");
      visitorGotEaten();
    } else {
      //console.log("ran ran ran");
      animalEscaped();
    }
  }
}

function visitorGotEaten() {
  // ממשו את הלוגיקה של חיה שטורפת אורח
  window.alert(
    `Oh no! You got eaten by a ${selectedAnimal.name}!!! Bye bye...`
  );
  //delete visitor from array
  visitors.forEach((visitor) => {
    if (visitor.name === selectedVisitor.name) {
      console.log(visitor.name, selectedVisitor.name);
      visitors = visitors.filter(
        (visitor) => visitor.name !== String(selectedVisitor.name)
      );
    } else {
      console.log("Houston we have a problem eaten");
    }
  });
  //delete from local storage -> setItem from the array
  localStorage.setItem("visitors", JSON.stringify(visitors));
  //remove current visitor and send back to login
  localStorage.removeItem("currentVisitor");
  window.location.href = "./login.html";
}

function animalEscaped() {
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות
  window.alert(`Oh no! The ${selectedAnimal.name} run away!!! Bye bye...`);
  //delete animal from array
  animals.forEach((animal) => {
    if (String(animal.name) === String(selectedAnimal.name)) {
      animals = animals.filter(
        (animal) => animal.name !== String(selectedAnimal.name)
      );
    } else {
      console.log("Houston we have a problem run");
    }
  });
  //delete the animal from the local storage
  localStorage.setItem("animals", JSON.stringify(animals));
  //remove current animal
  localStorage.removeItem("currentAnimal");
  window.location.href = "./zoo.html";
}

window.addEventListener("load", renderAnimal);
