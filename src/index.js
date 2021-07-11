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
	content.querySelector("ul").style.background = "#f59ca9";
	content.querySelectorAll("a").forEach((item) => {
		item.style.color = "#ffdc5e";
	});
});

menu.addEventListener("click", (e) => {
	content.removeChild(content.childNodes[1]);
	addNavbarUnderline(menu);
	removeNavbarUnderline(home);
	removeNavbarUnderline(contact);
	content.appendChild(menupage());
	content.querySelector("ul").style.background = "#F8A120";
	content.querySelectorAll("a").forEach((item) => {
		item.style.color = "#FFDC5E";
	});
});

contact.addEventListener("click", (e) => {
	content.removeChild(content.childNodes[1]);
	addNavbarUnderline(contact);
	removeNavbarUnderline(menu);
	removeNavbarUnderline(home);
	content.appendChild(contactpage());
	content.querySelector("ul").style.background = "#1C3978";
	content.querySelectorAll("a").forEach((item) => {
		item.style.color = "#FFF4EF";
	});
});
