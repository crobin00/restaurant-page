export function contactpage() {
	const background = document.createElement("div");
	const contactDiv = document.createElement("div");

	background.classList.add("contactBackground");
	contactDiv.classList.add("contactDiv");

	background.appendChild(contactDiv);

	const contacth1 = document.createElement("h1");
	const pictureContactDiv = document.createElement("div");
	const imgDiv = document.createElement("div");
	const infoDiv = document.createElement("div");
	const infoh3 = document.createElement("h3");
	const infoh4 = document.createElement("h4");

	contacth1.classList.add("contacth1");
	pictureContactDiv.classList.add("pictureContactDiv");
	imgDiv.classList.add("imgDiv");
	infoDiv.classList.add("infoDiv");

	pictureContactDiv.append(imgDiv, infoDiv);
	contactDiv.append(contacth1, pictureContactDiv);

	infoDiv.append(infoh3, infoh4);

	contacth1.innerText = "Contact Us";
	infoh3.innerText = "Mr. and Mrs. Banapple";
	infoh4.innerHTML = "999-999-999 <br> thebanapples@fruitlovers.net";

	return background;
}
