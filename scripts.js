"use strict";
console.log("hey");

let menu = {
  // Category (shown in Category selector)
  drinks: [
    // Category members (go into member display)
    "Water",
    "Tea",
    "Sweet Tea",
    "Coke",
    "Dr. Pepper",
    "Sprite",
  ],

  // Category (shown in Category selector)
  entrees: [
    // Category members (go into member display)
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],

  // Category (shown in Category selector)
  desserts: [
    // Category members (go into member display)
    "Cheesecake",
    "Chocolate Cake",
    "Snickerdoodle Cookie",
  ],
};

const catagorySelector = document.getElementById("catagorySelector");
catagorySelector.onchange = onCatagorySelectorChanged;

const btnEl = document.getElementById('btn');
btnEl.onclick = onBtnElClicked;

function onCatagorySelectorChanged() {
  console.log("changed");
  const catagorySelectorEl = document.getElementById("catagorySelector");
  let selectedValue = catagorySelector.value;
  console.log("selectedValue", selectedValue);
 console.log('menuItems',menu[selectedValue])

 let menuItems = menu[selectedValue]

  for (let i = 0; i < selectedValue.length; i++) {
     let optionEl = document.createElement("option");
    
     optionEl.textContent =menuItems[i];
    
     btn.appendChild(optionEl);
    


}
}
onCatagorySelectorChanged();{
    menuItems.option.length =0;
    const menuItems = document.getElementByIdd("catagorySelector");
    
}
