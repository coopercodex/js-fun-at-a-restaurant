function takeOrder(item, deliveryOrder) {
  if (deliveryOrder.length < 3) {
    deliveryOrder.push(item);
  }
    return deliveryOrder;
};

function refundOrder(number,deliveryOrder) {
  for (var i = 0; i < deliveryOrder.length; i++) {
    if (deliveryOrder[i].orderNumber === number) {
      deliveryOrder.splice([i],1)
    }
  }
  return deliveryOrder;
};

function listItems(deliveryOrder) {
  var newArray = [];
    for (var i = 0; i < deliveryOrder.length; i++) {
      newArray.push(deliveryOrder[i].item)
    };
  return newArray.join(', ');
};




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}