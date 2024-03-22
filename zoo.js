//localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));

let animalsForView = [...animals];
console.log(animalsForView);
const dialog = document.querySelector("#visitor-dialog");

let stringifiedVisitor = localStorage.getItem("currentVisitor");
let selectedVisitor = JSON.parse(stringifiedVisitor);

function navbarHTML(visitor) {
  const wrapper = document.createElement("div");
  wrapper.className = "navbar";
  wrapper.innerHTML = `<p>Visitor: ${visitor.name}</p>
  <p>  Coins: ${visitor.coins}</p>
  `;
  return wrapper;
}

function addVisitorToNavbar() {
  const dataToShow = navbarHTML(selectedVisitor);
  const whereToAdd = document.getElementById("visitorData");
  //console.log(dataToShow);
  whereToAdd.innerHTML = "";
  whereToAdd.appendChild(dataToShow);
}

const buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", () => {
  localStorage.clear();
  const setfieldVisitors = JSON.stringify(visitors);
  localStorage.setItem("visitors", setfieldVisitors);
  const setfieldAnimals = JSON.stringify(animals);
  localStorage.setItem("animals", setfieldAnimals);
  window.location.href = "./signup.html";
});

const getAnimalHTMLCard = (animal) => {
  console.log("inHTMLtemplate");
  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = `
  <div class="card" style="min-height: 360px; border: 5px solid rgb(0, 128, 0); 
  border-style: autset; border-radius: 25px;">
  <img src="${animal.image}" alt="${animal.name}"/>
  <h2>${animal.name}</h2>
  <p>Is predator: ${animal.isPredator}</p>
  <p>Weight: ${animal.weight}</p>
  <p>Height: ${animal.height}</p>
  <p style="color:${animal.color};">Color: ${animal.color}</p>
  <p>Habitat: ${animal.habitat}</p>
  </div>
  `;

  wrapper.addEventListener("click", () => visitAnimal(animal));
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

// const getSearchBox = () => {
//   const queryInput = document.createElement("input");
//   queryInput.id = "query-input";
//   queryInput.placeholder = "Search animals";
//   queryInput.className = "form-control my-4";
//   // צריך לטפל בזה - לא אמור לפלטר מאנימלס
//   // queryInput.oninput = (e) => {
//   //   animalsForView = animals.filter((animal) =>
//   //     animal.name.includes(e.target.value)
//   //   );
//   //   renderAvailableAnimals();
//   // };

//   return queryInput;
// };

// console.log(getSearchBox.value);

const clearSearchBox = () => {
  weightInput.value = "";
  heightInput.value = "";
  colorInputGrey.checked = true;
  colorInputBrown.checked = true;
  localStorage.setItem("colorBrown-filter", "true");
  localStorage.setItem("colorGrey-filter", "true");
  //צריך לתקן
  isPredatorInput.value = "";
  habitatInput.value = "";
  searchInput.value = "";
  animalsForView = [...animals];
  renderAvailableAnimals();
};

let buttonClear = document.getElementById("reset");

buttonClear = document.addEventListener("click", () => {
  return clearSearchBox();
});

//add another div with color - change the name color to the color
function renderAvailableAnimals() {
  // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
  // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
  // במידה ואין פילטרים מסומנים, הציגו את כל החיות
  console.log("in render");
  const animalsCards = animalsForView.map(getAnimalHTMLCard);
  const animalsPlaceholder = document.getElementById("placeholder");
  animalsPlaceholder.innerHTML = "";

  if (!animalsCards.length) {
    animalsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  console.log(animalsCards);
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

const isPredatorInput = document.querySelectorAll("[name='isPredator']");
const habitatInput = document.querySelectorAll("[name='habitat']");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const colorInputGrey = document.querySelector("#colorGrey");
const colorInputBrown = document.querySelector("#colorBrown");
const searchInput = document.getElementById("query-input");

//string names for comfort
const weightFilterKey = "weight-filter";
const heightFilterKey = "height-filter";
const isPredatorFilterKey = "isPredator-filter";
const habitatFilterKey = "habitat-filter";
const colorGreyFilterKey = "colorGrey-filter";
const colorBrownFilterKey = "colorBrown-filter";
const searchFilterKey = "search-filter";

if (localStorage.getItem(searchFilterKey)) {
  searchInput.value = localStorage.getItem(searchFilterKey);
}

searchInput.addEventListener("input", () => {
  setFilterOnLocalStorage(searchFilterKey, searchInput.value);
  console.log("search " + searchInput.value);
  setFilter("search", searchInput.value);
});

if (localStorage.getItem(weightFilterKey)) {
  weightInput.value = localStorage.getItem(weightFilterKey);
}

weightInput.addEventListener("input", () => {
  setFilterOnLocalStorage(weightFilterKey, weightInput.value);
  console.log("weight " + weightInput.value);
  setFilter("weight", weightInput.value);
});

if (localStorage.getItem(heightFilterKey)) {
  heightInput.value = localStorage.getItem(heightFilterKey);
}

heightInput.addEventListener("input", () => {
  setFilterOnLocalStorage(heightFilterKey, heightInput.value);
  console.log(localStorage.getItem("height"));
  setFilter("height", heightInput.value);
});

if (localStorage.getItem(isPredatorFilterKey)) {
  isPredatorInput.forEach((input) => {
    if (input.value === localStorage.getItem(isPredatorFilterKey)) {
      input.checked = true;
    }
  });
}

isPredatorInput.forEach((input) => {
  input.addEventListener("change", () => {
    setFilterOnLocalStorage(isPredatorFilterKey, input.value);
    console.log(localStorage.getItem("isPredator"));
    setFilter("isPredator", input.value);
  });
});

if (localStorage.getItem(habitatFilterKey)) {
  habitatInput.forEach((input) => {
    if (input.value === localStorage.getItem(habitatFilterKey)) {
      input.checked = true;
    }
  });
}

habitatInput.forEach((input) => {
  input.addEventListener("change", () => {
    setFilterOnLocalStorage(habitatFilterKey, input.value);
    console.log(localStorage.getItem("habitat"));
    setFilter("habitat", input.value);
  });
});

if (localStorage.getItem(colorGreyFilterKey)) {
  const currentValue = localStorage.getItem(colorGreyFilterKey);
  if (currentValue === "false") {
    colorInputGrey.checked = false;
  } else {
    colorInputGrey.checked = true;
  }
}

colorInputGrey.addEventListener("change", () => {
  setFilterOnLocalStorage(colorGreyFilterKey, colorInputGrey.checked);
  console.log(localStorage.getItem("colorGrey"));
  setFilter("color", colorInputGrey.value.toLowerCase());
});

if (localStorage.getItem(colorBrownFilterKey)) {
  const currentValue = localStorage.getItem(colorBrownFilterKey);
  if (currentValue === "false") {
    colorInputBrown.checked = false;
  } else {
    colorInputBrown.checked = true;
  }
}

colorInputBrown.addEventListener("change", () => {
  setFilterOnLocalStorage(colorBrownFilterKey, colorInputBrown.checked);
  console.log(localStorage.getItem("colorBrown"));
  setFilter("color", colorInputBrown.value.toLowerCase());
});

function setFilterOnLocalStorage(localStorageKey, valueToSet) {
  localStorage.setItem(localStorageKey, valueToSet);
  //console.log(localStorage.getItem(localStorageKey));
}

function setFilter(filterKey, filterValue) {
  console.log("in setFilter");
  console.log(animalsForView);
  animalsForView = [...animals];
  animalsForView = animalsForView.filter((animal) => {
    if (filterKey === "isPredator") {
      console.log(animal, filterKey, filterValue);
      return String(animal[filterKey]) === filterValue;
    }
    if (filterKey === "habitat") {
      console.log(animal, filterKey, filterValue);
      return String(animal[filterKey]) === filterValue.toLowerCase();
    }
    if (filterKey === "weight") {
      console.log(animal, filterKey, filterValue);
      return animal[filterKey] > parseInt(filterValue);
    }
    if (filterKey === "height") {
      return animal[filterKey] > parseInt(filterValue);
    }
    if (filterKey === "color") {
      return String(animal[filterKey]) === filterValue;
    }
    if (filterKey === "search") {
      console.log(filterKey, filterValue);
      return animal.name.toLowerCase().includes(filterValue.toLowerCase());
    }
  });
  console.log(animalsForView);
  renderAvailableAnimals();

  return;
}

// const filters = document.getElementById("filters");
// filters.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderAvailableAnimals);
window.addEventListener("load", addVisitorToNavbar);
