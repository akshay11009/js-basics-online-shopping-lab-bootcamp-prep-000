var cart = []

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100) + 1
  var obj = {};
  var key = item;
  obj[key] = price;
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  var s = `In your cart, you have `
  for(var i =0; i < cart.length; i++){
    for(var cartItem in cart[i]){
      s+= `${cartItem} at $${cart[i][cartItem]}, `
    }
  }
  s = s.replace(/, $/, ".");
  console.log(s)
}


function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    for(var c in cart[i]){
      if(cart[i].hasOwnProperty(c)){
        cart.splice(i, 1)
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNr){
  if(arguments.length === 0){
    console.log("We don't have a credit card on file for you to place your order.")
    return;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNr}.`)
  for(var i = 0; i < cart.length; i++){
    for(var c in cart[i]){
      cart.splice(i,1)
    }
  }
}