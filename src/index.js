import { navbar, addNavbarUnderline, removeNavbarUnderline } from "./navbar.js";
import { homepage } from "./home.js";
import { menupage } from "./menu.js";
import { contactpage } from "./contact.js";
const content = document.querySelector("#content");

content.appendChild(navbar());
content.appendChild(homepage());
const home = document.querySelector(".homeNav");
const menu = document.querySelector(".menuNav");
const contact = document.querySelector(".contactNav");
addNavbarUnderline(home);

home.addEventListener("click", (e) => {
	content.removeChild(content.childNodes[1]);
	addNavbarUnderline(home);
	removeNavbarUnderline(menu);
	removeNavbarUnderline(contact);
	content.appendChild(homepage());
});

menu.addEventListener("click", (e) => {
	content.removeChild(content.childNodes[1]);
	addNavbarUnderline(menu);
	removeNavbarUnderline(home);
	removeNavbarUnderline(contact);
	content.appendChild(menupage());
});

contact.addEventListener("click", (e) => {
	content.removeChild(content.childNodes[1]);
	addNavbarUnderline(contact);
	removeNavbarUnderline(menu);
	removeNavbarUnderline(home);
	content.appendChild(contactpage());
});
