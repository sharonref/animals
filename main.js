// מערכים גלובלים שישמשו אותנו בכל העמודים
let visitors = [
  {
    name: "John Smith",
    coins: 50,
    image: {
      url: "/images/Avatars1.jpeg",
      title: "Image 1",
      description: "Avatar",
    },
  },
  {
    name: "Emily Johnson",
    coins: 50,
    Image: "images/Avatars2.png",
  },
  {
    name: "Michael Williams",
    coins: 50,
    Image: "images/Avatars3.png",
  },
  {
    name: "Jessica Brown",
    coins: 50,
    Image: "images/Avatars4.png",
  },
  {
    name: "Christopher Jones",
    coins: 50,
    Image: "images/Avatars5.png",
  },
  {
    name: "Ashley Davis",
    coins: 50,
    Image: "images/Avatars6.png",
  },
  {
    name: "Matthew Miller",
    coins: 50,
    Image: "images/Avatars7.png",
  },
  {
    name: "Amanda Wilson",
    coins: 50,
    Image: "images/Avatars8.png",
  },
  {
    name: "David Moore",
    coins: 50,
    Image: "images/Avatars1.png",
  },
  {
    name: "Sarah Taylor",
    coins: 50,
    Image: "images/Avatars2.png",
  },
  {
    name: "James Anderson",
    coins: 50,
    Image: "images/Avatars3.png",
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
    Image: "images/Avatars4.png",
  },
  {
    name: "Robert Jackson",
    coins: 50,
    Image: "images/Avatars5.png",
  },
  {
    name: "Elizabeth White",
    coins: 50,
    Image: "images/Avatars6.png",
  },
  {
    name: "Daniel Harris",
    coins: 50,
    Image: "images/Avatars7.png",
  },
  {
    name: "Melissa Martin",
    coins: 50,
    Image: "images/Avatars8.png",
  },
  {
    name: "William Thompson",
    coins: 50,
    Image: "./images/Avatars1.jpeg",
  },
  {
    name: "Linda Garcia",
    coins: 50,
    Image: "./images/Avatars2.png",
  },
  {
    name: "Joseph Martinez",
    coins: 50,
    Image: "./images/Avatars3.png",
  },
  {
    name: "Karen Robinson",
    coins: 50,
    Image: "./images/Avatars4.png",
  },
];

let animals = [
  {
    name: "Lion",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Elephant",
    isPredator: false,
    weight: 1200,
    height: 200,
    color: "grey",
    habitat: "land",
  },
  {
    name: "Giraffe",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Tiger",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Monkey",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Kangaroo",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Penguin",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "sea",
  },
  {
    name: "Zebra",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Cheetah",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
];

// פונקציה זו טוענת עבורכם את המידע ההתחלתי של האפליקציה, במידה וקיים מידע בלוקל סטורג׳, היא תקח אותו משם
// אל תשנו את הקוד בפונקציה הזו כדי לשמור על תקינות הטמפלייט
function generateDataset() {
  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  console.log(visitors);
}
generateDataset();

//********************** */

let currentVisitor;
localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));
const storedObject = JSON.parse(localStorage.getItem("currentVisitor"));

function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
  localStorage.clear("currentVisitor");
}
