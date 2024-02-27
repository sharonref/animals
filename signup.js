function createNewVisitor(event) {
  // ביטול התנהגות דיפולטיבית של שליחת טופס
  // קראו עוד כאן: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  event.preventDefault();
  const nameInput = document.getElementById("visitor-name");
  if (!nameInput) {
    // error flow
    alert("Something went wrong");
    return;
  }

  if (!nameInput.value) {
    // validate there is a text in the inputs
    alert("You must provide a name for your user");
    return;
  }

  if (visitors.some((visitor) => visitor.name === nameInput.value)) {
    alert("This person has a user");
    return;
  }

  const visitor = {
    //creating the user
    name: nameInput.value,
    coins: 50,
    Image: "./images/Avatars2.jpeg",
  };

  visitors.push(visitor);

  const stringifiedVisitors = JSON.stringify(visitors);

  localStorage.setItem("visitors", stringifiedVisitors);
  //Adding the user to the local storage

  window.location.href = "./login.html";
}

/**************************************
  מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
  שימו לב כי האיידי של createForm
  זהה לאיידי של הטופס בעמוד signup.html
  אין לשנות אותו */
const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}
