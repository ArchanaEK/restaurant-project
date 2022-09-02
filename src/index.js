import contactUs from './contactUs'
import generateJokes from './home'
import menu from './menu'
import './style.css';
console.log(contactUs())
console.log(menu())
console.log(generateJokes());


var mainPage=document.getElementById('content');
mainPage.classList.add('BeeImage')
var content = document.createElement('div');
content.innerText = "hello";

const navMenu = document.createElement('nav');

const homeBtn = document.createElement('a');
homeBtn.classList.add('nav-link', 'm-2', 'p-2');
homeBtn.textContent = 'Home';
homeBtn.addEventListener('click', () => {
  displayHome(mainContent);
});


const menuBtn = document.createElement('a');
menuBtn.classList.add('nav-link', 'm-2', 'p-2');
menuBtn.textContent = 'Menu';
menuBtn.addEventListener('click', () => {
  showMenu(mainContent);
});


const contactBtn = document.createElement('a');
contactBtn.classList.add('nav-link', 'm-2', 'p-2');
contactBtn.textContent = 'Contact';
contactBtn.addEventListener('click', () => {
  contactPage(mainContent);
});


navMenu.appendChild(homeBtn)
navMenu.appendChild(menuBtn)
navMenu.appendChild(contactBtn);

mainPage.appendChild(navMenu)

console.log(navMenu)
