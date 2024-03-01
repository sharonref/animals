let currentVisitor;
function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
  currentVisitor = visitorName;
  localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));

  window.location.href = "./zoo.html";
}

let visitorsForView = [...visitors];
const dialog = document.querySelector("#visitor-dialog");

const getVisitorHTMLCard = (visitor) => {
  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = `
      <div class="card" style="min-height: 360px;" >
      <div class="card-body">
      <img class="card-img-top" src="${visitor.image}" alt="${visitor.name}"/>
      <p class="card-text">${visitor.name}</p>
          <p class="card-text">Coins: ${visitor.coins}</p>
        </div>
      </div>`;
  wrapper.addEventListener("click", () => handleVisitorClick(visitor));
  console.log("Hello");
  return wrapper;
};

const handleVisitorClick = (visitor) => {
  loginAsVisitor(visitor);
};

const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search visitors";
  queryInput.className = "form-control my-4";
  queryInput.oninput = (e) => {
    visitorsForView = visitors.filter((visitor) =>
      visitor.name.includes(e.target.value)
    );
    renderVisitors();
  };
  return queryInput;
};

const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
    <h2>No Visitors Found</h2>
    <p>We're sorry, but no vistor that matchs your search.</p>
    <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
    `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener(
    "click",
    clearSearchBox
  );
  return templateWrapper;
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  visitorsForView = [...visitors];
  renderVisitors();
};

const renderVisitors = () => {
  // console.log("Hello");
  const visitorCards = visitorsForView.map(getVisitorHTMLCard);
  const visitorsPlaceholder = document.getElementById("placeholder");
  visitorsPlaceholder.innerHTML = "";

  if (!visitorCards.length) {
    visitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  visitorsPlaceholder.append(...visitorCards);
};

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderVisitors);
