/******************* Change Avatar onclick ***********************/

const avatar = document.getElementById("avatar");
const modal = document.getElementById("modal");

document.getElementById("avatar").addEventListener("click", showImg);

function showImg() {
  modal.style.display = "block";
  avatar.style.display = "none";
}

document.getElementById("avatar2").addEventListener("click", changeImg);

function changeImg() {
  modal.style.display = "none";
  avatar.style.display = "block";
}

/******************* Change Background and Text Color ***********************/

const pinkText = document.querySelectorAll(".pink-text");
const pinkBg = document.querySelectorAll(".pink-bg")

document.getElementById("text").addEventListener("click", changeColors);

function changeColors() {
  const bg = prompt("change the color");
  for (let i = 0; i < pinkBg.length; i++ ) {
    pinkBg[i].style.background = bg;
  }
  for (let i = 0; i < pinkText.length; i++ ) {
    pinkText[i].style.color = bg;
  }
}

const newName = document.getElementById("name");
document.getElementById("text").addEventListener("click", changeText );

function changeText() {
  const person = prompt("Please enter your name:", "");
  newName.innerHTML = person;
  newName.style.color = "#ffffff";
}

/******************* Change Color Links ***********************/

const linksColor = document.querySelectorAll(".menu a");
document.getElementById("links").addEventListener("click", changeLinks );

function changeLinks() {
  const link = prompt("change the color");
  linksColor.forEach(el => {
    el.style.color=link;
  })
}

/******************* Change Skill ***********************/

const newSkills = document.querySelectorAll(".skills-li");
document.getElementById("skills").addEventListener("click", changeSkills );

function changeSkills() {
  const skills = ["VsCode", "GitHub", "Terminal"];
 
  newSkills.forEach((el, i) => {
    el.innerHTML= skills[i];
  })
}

/******************* Add a new Skill ***********************/

const test = document.getElementById("input");
const test2 = document.getElementById("addSkill");
const inputs = document.getElementById("input").addEventListener("click", addNewSkill );
const a = document.getElementById("addSkill").addEventListener("click", addNewSkill );
const cards = document.querySelector(".skill ul");

function addNewSkill() {
  let newList = document.createElement("li");
  newList.classList.add("newList")
  cards.appendChild(newList);

  test.style.color = '#fff';
  test.style.background = 'tomato';
  test2.style.background = 'yellow';
  test2.style.color = '#000';
}

// for(let i=0; i < cards.length; i++ ) {
//   addNewSkill(cards[i]);
// }

console.log(cards);
