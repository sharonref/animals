//localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));

let animalsForView = [...animals];

const getAnimalHTMLCard = (animal) => {
  console.log("inHTMLtemplate");
  const wrapper = document.createElement("div");
  wrapper.className = "animal-card";
  wrapper.innerHTML = `
  <div class="card" style="min-height: 360px;>
  <h2>${animal.name}</h2>
  <p>Is predator: ${animal.isPredator}</p>
  <p>Weight: ${animal.weight}</p>
  <p>Height: ${animal.height}</p>
  <p>Color: ${animal.color}</p>
  <p>Habitat: ${animal.habitat}</p>
  </div>
  `;

  wrapper.addEventListener("click", () => visitAnimal(animal.name));
  console.log("finishedHTMLtemplate");
  return wrapper;
};

const getEmptyCardsHTMLTemplate = () => {
  console.log("inEmtpyHTMLtemplate");
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
    <h2>No Animals Found</h2>
    <p>We're sorry, but no animal that matchs your search.</p>
    <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
    `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener(
    "click",
    clearSearchBox
  );
  console.log("finishedEmtpyHTMLtemplate");
  return templateWrapper;
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  //למחוק את כל שאר הפילטרים בנוסף לחיפוש
  animalsForView = [...animals];
  renderAvailableAnimals();
};

function renderAvailableAnimals() {
  // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
  // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
  // במידה ואין פילטרים מסומנים, הציגו את כל החיות
  console.log("in render");
  const animalsCards = animalsForView.map(getAnimalHTMLCard);
  const animalsPlaceholder = document.getElementById("animal-cards");
  animalsPlaceholder.innerHTML = "";

  if (!animalsCards.length) {
    animalsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  animalsPlaceholder.append(...animalsCards);
  console.log("finish render");
}

function visitAnimal(animalName) {
  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
  let currentAnimal = animalName;
  localStorage.setItem("currentAnimal", JSON.stringify(currentAnimal));
  window.location.href = "./animal.html";
}

// function setFilter(filterKey, filterValue) {
//   /**
//    * ממשו את הלוגיקה של השמת פילטר
//    * הפילטרים הקיימים הם
//    * isPredator: true | false
//    * habitat: "land" | "sea"
//    * weight: value > user selected weight
//    * height: value > user selected height
//    * color: dropdown of all available colors
//    */
//   // ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
//   // רנדרו רק את החיות שעומדות בתנאים של הפילטרים
// }

window.addEventListener("load", renderAvailableAnimals);
