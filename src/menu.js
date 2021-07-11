export function menupage() {
	const backgroundImage = document.createElement("div");

	const menuDiv = document.createElement("div");
	const menuh1 = document.createElement("h1");
	menuh1.innerText = "Menu";
	menuh1.classList.add("menuh1");
	/*const smoothiesh2 = document.createElement("h2");
	smoothiesh2.innerText = "Smoothies";
	smoothiesh2.classList.add("smoothiesh2");*/

	const smoothies = foodCategory("Smoothies");

	backgroundImage.classList.add("menuBackground");
	menuDiv.classList.add("menuDiv");

	const berryBanana = foodItem("Berry Banana Smoothie", 30);
	berryBanana.querySelector(".foodItemImg").style.backgroundImage =
		"url('./images/fooditems/berrybanana.jpeg')";

	const mangoPineapple = foodItem("Mango Pineapple Smoothie", 50);
	mangoPineapple.querySelector(".foodItemImg").style.backgroundImage =
		"url('./images/fooditems/mangopineapple.jpeg')";

	const honeydew = foodItem("Honeydew Smoothie", 50);
	honeydew.querySelector(".foodItemImg").style.backgroundImage =
		"url('./images/fooditems/honeydew.jpeg')";

	const snacks = foodCategory("Snacks");

	const pineappleKiwi = foodItem("Pineapple Kiwi Pops", 50);
	pineappleKiwi.querySelector(".foodItemImg").style.backgroundImage =
		"url('./images/fooditems/pineapplekiwipops.jpeg')";

	const watermelonTarts = foodItem("Watermelon Lemon Tarts", 50);
	watermelonTarts.querySelector(".foodItemImg").style.backgroundImage =
		"url('./images/fooditems/watermelonlemontarts.jpeg')";

	const fruitParfait = foodItem("Fruit Parfait", 50);
	fruitParfait.querySelector(".foodItemImg").style.backgroundImage =
		"url('./images/fooditems/fruitparfait.jpeg')";

	menuDiv.append(
		menuh1,
		smoothies,
		berryBanana,
		mangoPineapple,
		honeydew,
		snacks,
		pineappleKiwi,
		watermelonTarts,
		fruitParfait
	);

	backgroundImage.appendChild(menuDiv);

	return backgroundImage;
}

class menuItem {
	constructor(name, calories) {
		this.name = name;
		this.calories = calories + " cal";
	}
}

function foodCategory(category) {
	const categoryh2 = document.createElement("h2");
	categoryh2.innerText = `${category}`;
	categoryh2.classList.add("categoryh2");
	return categoryh2;
}

function foodItem(name, calories) {
	const foodItemDiv = document.createElement("div");
	foodItemDiv.classList.add("foodItemDiv");
	const foodItem = new menuItem(name, calories);
	const foodItemImg = document.createElement("img");
	foodItemImg.classList.add("foodItemImg");
	const foodItemSpan = document.createElement("span");
	foodItemSpan.classList.add("foodItemSpan");
	foodItemSpan.innerHTML = `${foodItem.name} <br> ${foodItem.calories}`;

	foodItemDiv.append(foodItemImg, foodItemSpan);
	return foodItemDiv;
}
