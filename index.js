// task 1

const newTab = window.open("https://www.google.com/", "google", "width = 300, height = 300");
setTimeout(() => newTab.resizeTo(500, 500), 2000);
setTimeout(() => newTab.moveTo(200, 200), 4000);
setTimeout(() => newTab.close(), 6000);

// task 2

const changeCSS = () => {
  const text = document.getElementById("text");
  text.style.color = "orange";
  text.style.fontSize = "20px";
  text.style.fontFamily = "Comic Sans MS";
};

document.getElementsByTagName("button")[0].addEventListener("click", changeCSS);

// task 3

const getBlue = () => (document.body.style.backgroundColor = "blue");
const getPink = () => (document.body.style.backgroundColor = "pink");
const getBrown = () => (document.body.style.backgroundColor = "brown");
const getWhite = () => (document.body.style.backgroundColor = "white");
const getYellow = () => (document.body.style.backgroundColor = "yellow");

const buttons = document
  .getElementById("third task")
  .getElementsByTagName("button");
buttons[0].addEventListener("click", getBlue);
buttons[1].addEventListener("dblclick", getPink);
buttons[2].addEventListener("mousedown", getBrown);
buttons[2].addEventListener("mouseup", getWhite);
document
  .getElementById("third task")
  .getElementsByTagName("a")[0]
  .addEventListener("mouseover", getYellow);
document
  .getElementById("third task")
  .getElementsByTagName("a")[0]
  .addEventListener("mouseout", getWhite);

// task 4

const removeOption = () => {
  const options = document
    .getElementById("task4")
    .getElementsByTagName("option");
  const arr = [...options];
  for (const elem of arr) {
    if (elem.selected) return elem.remove();
  }
};

document
  .getElementById("task4")
  .getElementsByTagName("button")[0]
  .addEventListener("click", removeOption);

// task 5

const liveButton = document
  .getElementById("task5")
  .getElementsByTagName("button")[0];

const getPressed = () => {
  const p = document.createElement("p");
  p.innerHTML = "I was pressed!";
  return liveButton.after(p);
};

const getMouseOn = () => {
  const p = document.createElement("p");
  p.innerHTML = "Mouse on me!";
  return liveButton.after(p);
};

const getMouseOut = () => {
  const p = document.createElement("p");
  p.innerHTML = "Mouse is not on me!";
  return liveButton.after(p);
};

liveButton.addEventListener("click", getPressed);
liveButton.addEventListener("mouseover", getMouseOn);
liveButton.addEventListener("mouseout", getMouseOut);

// task 6

const msg = document.createElement("p");
msg.innerHTML = `Width: ${window.outerWidth} Height:${window.outerHeight}`;
liveButton.after(msg);

const changeWindow = () => {
  const width = window.outerWidth;
  const height = window.outerHeight;
  msg.innerHTML = `Width: ${width}, Height: ${height}`;
  return country.before(msg);
};

window.addEventListener("resize", changeWindow);

// task 7

const cities = document.getElementById("cities");
const country = document.getElementById("country");
const countries = country.options;
const txt = document.getElementsByTagName("p");

const a = document.createElement("option");
a.innerHTML = "Berlin";
const b = document.createElement("option");
b.innerHTML = "Hamburg";
const c = document.createElement("option");
c.innerHTML = "Munich";
cities.append(a, b, c);

const citiesChange = () => {
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].value === "ger" && countries[i].selected) {
      a.innerHTML = "Berlin";
      b.innerHTML = "Hamburg";
      c.innerHTML = "Munich";
    } else if (countries[i].value === "usa" && countries[i].selected) {
      a.innerHTML = "Detroit";
      b.innerHTML = "Chicago";
      c.innerHTML = "Boston";
    } else if (countries[i].value === "ukr" && countries[i].selected) {
      a.innerHTML = "Lviv";
      b.innerHTML = "Kyiv";
      c.innerHTML = "Dnipro";
    }
  }
};

txt[txt.length - 1].innerHTML = `${countries[country.selectedIndex].text}, ${cities.value}`;

const getMsg = () => txt[txt.length - 1].innerHTML = `${countries[country.selectedIndex].text}, ${cities.value}`;

country.addEventListener("change", citiesChange);
country.addEventListener("change", getMsg);
cities.addEventListener("change", getMsg);
