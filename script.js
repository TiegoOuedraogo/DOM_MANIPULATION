let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//Part 1

let mainEl = document.querySelector("main");
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
//2Style the Menu Bar:
//2.1 Set its height to 100%:
topMenuEl.style.height = "100%";
//Set the background color using the --top-menu-bg CSS custom property:
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//Add a flex-around class for layout:
topMenuEl.classList.add("flex-around");


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


//Part3
// Select and cache the <nav id="sub-menu"> element
let subMenuEl = document.querySelector("#sub-menu");

// Style subMenuEl: Set its height and background color
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the 'flex-around' class to subMenuEl
subMenuEl.classList.add("flex-around");

// Position subMenuEl: Set CSS position property to absolute and top property to 0
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";


//Part 4
topMenuEl.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior

  // Check if the clicked element is an <a> tag
  if (event.target.tagName === 'A') {
    
      const linkText = event.target.textContent.trim().toUpperCase();
      const menuLink = menuLinks.find(link => link.text.toUpperCase() === linkText);

      if (menuLink && menuLink.subLinks) {
          // Show submenu if there are subLinks
          subMenuEl.style.top = "100%";
          buildSubmenu(menuLink.subLinks); 
      } else {
          // Hide submenu
          subMenuEl.style.top = "0";
      }

    
    }
});
// Initialize the menu once the page loads
document.addEventListener('DOMContentLoaded', () => {
  createMainMenu();
});

function createMainMenu() {
  // Clear existing main menu content
  topMenuEl.innerHTML = '';

  menuLinks.forEach((menuItem) => {
      const aElement = document.createElement("a");
      aElement.href = menuItem.href;
      aElement.textContent = menuItem.text;
      topMenuEl.appendChild(aElement);
  });
}

// Event delegation for main menu
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior

  if (event.target.tagName === 'A') {
      const linkText = event.target.textContent.trim().toLowerCase();
      const menuLink = menuLinks.find(link => link.text.toLowerCase() === linkText);

      if (menuLink && menuLink.subLinks) {
          displaySubmenu(menuLink.subLinks);
      } else {
          // Hide submenu
          subMenuEl.style.top = "0";
      }
  }
});

function displaySubmenu(subLinks) {
  // Clear existing submenu content
  subMenuEl.innerHTML = '';

  subLinks.forEach((submenuItem) => {
      const submenuLink = document.createElement("a");
      submenuLink.href = submenuItem.href;
      submenuLink.textContent = submenuItem.text;
      subMenuEl.appendChild(submenuLink);
  });

  // Show the submenu
  subMenuEl.style.top = "100%";
}



