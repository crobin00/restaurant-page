export function homepage() {
	const background = document.createElement("div");
	const backgroundImage = document.createElement("div");
	backgroundImage.classList.add("homeBanana");
	background.appendChild(backgroundImage);

	const textContainer = document.createElement("div");
	background.appendChild(textContainer);

	const title = document.createElement("h1");
	const enjoyText = document.createElement("p");
	const about = document.createElement("p");
	const punText = document.createElement("span");

	title.innerText = "The Fruit Pad";
	enjoyText.innerText =
		"Enjoy the tastiest fruit smoothies and snacks you’ve ever had. ";
	about.innerText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis blandit nisl vel consectetur. Morbi libero metus, commodo placerat tellus ac, porttitor luctus libero. Aliquam at iaculis massa, et cursus elit. Mauris finibus egestas neque sed eleifend. Aliquam a porttitor mi. Morbi luctus, urna eget porttitor rhoncus, lorem elit vehicula tellus, ut elementum augue orci ac elit.";

	punText.innerText = "We promise it's very a-peeling";

	title.classList.add("homeH1");
	enjoyText.classList.add("homeP");
	about.classList.add("homeP");
	punText.classList.add("homePun");

	textContainer.append(title, enjoyText, about);
	background.appendChild(punText);

	background.classList.add("homeBackground");
	textContainer.classList.add("homeText");

	return background;
}
