fetch("http://localhost:3000/burgers")
.then(response => response.json())
.then(burgerArray => {burgerArray.forEach(burger => displayBurgerMenu(burger))
                                                    displayBurger(burgerArray[0])
})
let currentBurger;
function displayBurger(burger) {
 currentBurger = burger;
 const burgerImage = document.querySelector("#image");
 burgerImage.src = currentBurger.image;
 const burgerName = document.querySelector("#name");
 burgerName.textContent = currentBurger.name;
 const burgerDescription = document.querySelector("#burger-info");
 burgerDescription.textContent = currentBurger.description;
 const remainingBurgers = document.querySelector("#burger-num");
 remainingBurgers.textContent = currentBurger.maximum_number_of_burgers - currentBurger.burgers_sold
}

function displayBurgerMenu(burger) {
    const burgerMenu = document.querySelector("#restaurant-menu");
    const burgerMenuImage = document.createElement("img");
    burgerMenuImage.src = burger.image;
    burgerMenu.appendChild(burgerMenuImage);
    burgerMenuImage.addEventListener("click", () => displayBurger(burger))
}
const buyButton = document.querySelector("#buy-burger");
buyButton.addEventListener("click", () => remainingBoughtBurgers())


function remainingBoughtBurgers() {
    const remainingBurgers = document.querySelector("#burger-num");
    const remainingBurgersValue = parseInt(remainingBurgers.textContent);
    if (remainingBurgersValue > 0) {
        remainingBurgers.textContent -= 1;
    }
    else {
            alert("Sorry, we don't have enough burgers!")
        } 
}
