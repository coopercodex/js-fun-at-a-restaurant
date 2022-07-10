const { listItems } = require("./order")

function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
};
function addMenuItem(restaurant,menuItem) {
  if (menuItem.type === 'lunch' && !restaurant.menus.lunch.includes(menuItem)) {
    restaurant.menus.lunch.push(menuItem)
  } else if (menuItem.type === 'breakfast') {
      if (!restaurant.menus.breakfast.includes(menuItem)) {
        restaurant.menus.breakfast.push(menuItem)
      }
  } else {
      if (!restaurant.menus.dinner.includes(menuItem)) {
        restaurant.menus.dinner.push(menuItem)
      }
  }
};

function removeMenuItem(restaurant,menuItem,menuType) {
  for (var i = 0; i < restaurant.menus[menuType].length; i++) {
      if (restaurant.menus[menuType][i].name === menuItem) {
        restaurant.menus[menuType].splice(i,1)
        return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
      }
  }
  return `Sorry, we don\'t sell ${menuItem}, try adding a new recipe!`;
};

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}