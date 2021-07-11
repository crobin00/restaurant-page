const body = document.querySelector("#content");
export function navbar() {
	const navbarContainer = document.createElement("div");
	navbarContainer.appendChild(createLinkElements());
	return navbarContainer;
}

export function addNavbarUnderline(navbarElement) {
	navbarElement.classList.add("navbarUnderline");
}

export function removeNavbarUnderline(navbarElement) {
	navbarElement.classList.remove("navbarUnderline");
}

function createLinkElements() {
	const navbarElements = document.createElement("ul");
	const home = document.createElement("li");
	const homeLink = document.createElement("a");
	home.classList.add("homeNav");
	homeLink.href = "#";
	homeLink.innerText = "Home";
	home.appendChild(homeLink);
	navbarElements.appendChild(home);

	const menu = document.createElement("li");
	const menuLink = document.createElement("a");
	menu.classList.add("menuNav");
	menuLink.href = "#";
	menuLink.innerText = "Menu";
	menu.appendChild(menuLink);
	navbarElements.appendChild(menu);

	const contact = document.createElement("li");
	const contactLink = document.createElement("a");
	contact.classList.add("contactNav");
	contactLink.href = "#";
	contactLink.innerText = "Contact";
	contact.appendChild(contactLink);
	navbarElements.appendChild(contact);

	return navbarElements;
}
