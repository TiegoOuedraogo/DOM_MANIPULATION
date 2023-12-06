
//Part 1
//1 Select and Cache <main> Element:
let mainEl = document.querySelector("main");
console.log("Part 1 1.1", mainEl);
//2 Set Background Color:
// Use mainEl.style.backgroundColor = 'var(--main-bg)'
// to set the background color using
// the CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
//3Set Content: Use mainEl.innerHTML = '<h1>DOM Manipulation</h1>' to set the content.
// mainEl.innerHTML = "<h1> DOM Manipulation IS VERY FUN<h1>";
// mainEl.innerHTML = '<h2 style="color: red;">WHAT WOULD LIFE LOOK LIKE WITHOUT DOM?</h2>';
mainEl.innerHTML = `
  <h2>
    <span style="color: red;">W</span>
    <span style="color: orange;">H</span>
    <span style="color: yellow;">A</span>
    <span style="color: green;">T</span>
    <span style="color: blue;">&nbsp;W</span>
    <span style="color: indigo;">O</span>
    <span style="color: violet;">U</span>
    <span style="color: red;">L</span>
    <span style="color: orange;">D</span>
    <span style="color: yellow;">&nbsp;L</span>
    <span style="color: green;">I</span>
    <span style="color: blue;">F</span>
    <span style="color: indigo;">E</span>
    <span style="color: violet;">&nbsp;L</span>
    <span style="color: red;">O</span>
    <span style="color: orange;">O</span>
    <span style="color: yellow;">K</span>
    <span style="color: green;">&nbsp;L</span>
    <span style="color: blue;">I</span>
    <span style="color: indigo;">K</span>
    <span style="color: violet;">E</span>
    <span style="color: red;">&nbsp;W</span>
    <span style="color: orange;">I</span>
    <span style="color: yellow;">T</span>
    <span style="color: green;">H</span>
    <span style="color: blue;">O</span>
    <span style="color: indigo;">U</span>
    <span style="color: violet;">T</span>
    <span style="color: red;">&nbsp;D</span>
    <span style="color: orange;">O</span>
    <span style="color: yellow;">M</span>
    <span style="color: green;">?</span>
  </h2>
`;

//4Add Class flex-ctr: Use mainEl.classList.add('flex-ctr') to add the class.
mainEl.classList.add("flex-ctr");

//Part Part 2: Creating a Menu Bar
//1.Select and Cache the Menu Bar Element:
// Select the menu bar element with ID 'top-menu'
let topMenuEl = document.querySelector("#top-menu");
console.log("Top Menu Element: ", topMenuEl);
//2Style the Menu Bar:
//2.1 Set its height to 100%:
topMenuEl.style.height = "100%";
//Set the background color using the --top-menu-bg CSS custom property:
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//Add a flex-around class for layout:
topMenuEl.classList.add("flex-around");

//Part 3: Adding Menu Buttons
//Copy the menuLinks Array:
const menuLinks = [
  { href: "link1.html", text: "About" },
  { href: "link2.html", text: "CATALOG" },
  { href: "link3.html", text: "ORDERS" },
  { href: "link4.html", text: "ACCOUNT" },
];
//Iterate Over menuLinks:
menuLinks.forEach((eachMenulink) => {
  // Create an <a> element
  const aElement = document.createElement("a");
  console.log("Those are the links created", eachMenulink);
  // Set its href attribute
  aElement.href = eachMenulink.href;

  // Set its text content
  aElement.textContent = eachMenulink.text;

  // Append the new element to topMenuEl
  console.log("Those are the appended links", topMenuEl.appendChild(aElement));
});
