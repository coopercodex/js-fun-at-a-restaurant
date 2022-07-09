function nameMenuItem(title) {
  var newTitle = `Delicious ${title}`;
  return newTitle;
};
 
function createMenuItem(name,price,type) {
  var newItem = {
    name: name,
    price: price,
    type: type,
  };
  return newItem;
}

function addIngredients(item, ingredients) {
  if (!ingredients.includes(item)){
    ingredients.push(item);
   }
    return ingredients;
} 

function formatPrice(item) {
  return '$' + item;
};

function decreasePrice(price) {
  var discount = 
  price - price * 0.10;

  return discount;
console.log(item, price)
};

function createRecipe(title,ingredients,type) {
var recipe = {
  title: title,
  ingredients: ingredients,
  type: type
}
return recipe;
};
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


