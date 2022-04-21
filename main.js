console.log("hello");
var count = 0;

// Counter for items
var counterDisplayElem = document.getElementById('counter-display');
var counterMinusElem = document.getElementById('counter-minus');
var counterPlusElem = document.getElementById('counter-plus');
// Cart item amount
var addToCartElem = document.getElementById('addToCart'); // only on product-detail.html
var cartCounter = document.getElementById('cart-count');

// Prices
var cookieTotal = document.getElementById('cookie-total');
var cartTotal = document.getElementById('total');
let helpElem = document.getElementById('help-frequency'); // Help on product-detail.html (frequency)

// add and subtract for counter buttons
function addCount() {
  count++;
  counterDisplayElem.innerHTML = count;
}
function subtractCount() {
  count--;
  counterDisplayElem.innerHTML = count;
}

// updates the # of items in the cart in the top right of the screen (on all pages)
function updateCartCount() {
  let cartTmp = JSON.parse(localStorage.getItem("cart-storage"));
  if (cartTmp != null) {
    myCart = cartTmp;
  }
  myCart.count = myCart.items.length;
  console.log("updateCartCount", myCart.items);
  cartCounter.innerHTML = myCart.count;
  localStorage.setItem("cart-storage", JSON.stringify(myCart));
}
function updateTotal() {
  let cartTmp = JSON.parse(localStorage.getItem("cart-storage"));
  console.log("in updateTotal() cartTmp:", cartTmp);
  if (cartTmp === null) {
    cartTmp = myCart;
  }

  newTotal = 0;
  for (let itemInd in cartTmp.items) {
    let item = cartTmp.items[itemInd];
    console.log("count and cost:", item.quantity, item.cost);
    newTotal += parseInt(item.quantity) * parseInt(item.cost);
  }
  cartTmp.total = newTotal;
  try {
    cartTotal.innerHTML = cartTmp.total;
  }
  catch(typeError) {
    console.log("not on cart.html");
  }
  finally{
    localStorage.setItem("cart-storage", JSON.stringify(cartTmp));
  }

}

// add an item to cart
function addToCart() {
  let q = counterDisplayElem.innerHTML;
  let frequencyElem = document.getElementById("frequency");
  let f = frequencyElem.selectedIndex;
  newCookie = new ChocoCookie(q, f);
  myCart.items.push(newCookie);
  updateTotal();
  updateCartCount();
  alert("Item added to cart!");

  console.log(myCart, "len of cart", myCart.count);
  localStorage.setItem("cart-storage", JSON.stringify(myCart));
  console.log("retrieved:", JSON.parse(localStorage.getItem("cart-storage")));
}

function ChocoCookie(quantity, frequency) {
  this.name = "Chocolate chip cookie";
  this.quantity = quantity;
  this.frequency = frequency;
  this.cost = 1;
  this.image = "img/cookie.png";
  this.image_alt = "chocolate chip cookie";
}

function GingerbreadCookie(name, quantity, frequency, cost) {
  this.name = "Gingerbread cookie";
  this.quantity = quantity;
  this.frequency = frequency;
  this.cost = 2;
  this.image = "img/gingerbread.png";
  this.image_alt = "gingerbread cookie";
}

function Biscuit(name, quantity, frequency, cost) {
  this.name = "Biscuit";
  this.quantity = quantity;
  this.frequency = frequency;
  this.cost = 1;
  this.image = "img/biscuit.png";
  this.image_alt = "biscuit cookie";
}


function Cart(items, total) {
  this.items = items; //list of Cookie/Cake instances in shopping cart
  this.count = items.length;
  this.total = total;
}

// remove an item from the cart
function removeFromCart() {
  if (confirm("Are you sure you want to delete this item?")) {
    let cartTmp = JSON.parse(localStorage.getItem("cart-storage"));
    console.log(cartTmp);
    cartTmp.items.shift();
    cartTmp.count = cartTmp.items.length;
    localStorage.setItem("cart-storage", JSON.stringify(cartTmp));
    updateTotal();
    loadCart();
    updateCartCount();
  }
}

// fills in the table on cart.html
function loadCart() {
  let cartTmp = JSON.parse(localStorage.getItem("cart-storage"));
  console.log("loadCart() cartTmp:", cartTmp);
  // empty cart
  if (cartTmp === null || cartTmp.count === 0) {

    console.log("no cart");

    document.getElementById("item-1-image").src = "img/night.png"
    document.getElementById("item-1-name").innerHTML = "Add an item to the cart!"

    document.getElementsByClassName("counter")[0].style.visibility = "hidden";
    document.getElementById("slash").style.visibility = "hidden";
    document.getElementById("frequency").style.visibility = "hidden";
    document.getElementsByClassName("item-price")[0].style.visibility = "hidden";
    document.getElementsByClassName("button-remove")[0].style.visibility = "hidden";
  }
  // not empty cart
  else {
    console.log("cart is not empty:", cartTmp);
    let items = cartTmp.items;
    // TODO: add multiple items to cart, need to loop through items
    let item1 = items[0];
    console.log("item1:", item1);
    console.log(item1.cost, item1.quantity);

    document.getElementById("item-1-image").src = item1.image;
    document.getElementById("item-1-image").alt = item1.image_alt;
    document.getElementById("item-1-name").innerHTML = item1.name;
    document.getElementById("counter-display").innerHTML = item1.quantity;
    document.getElementById("frequency").selectedIndex = item1.frequency;
    document.getElementById("item-1-total").innerHTML = parseInt(item1.cost) * parseInt(item1.quantity)
    updateTotal();
    updateCartCount();
  }
}

function helpFreq() {
  console.log("clicked help button");
  alert("Frequency of subscription --\n\nday: shipped every day at 8 am\nweek: shipped every week on Monday\nmonth: shipped every month on the first day of each month");
}



function onLoad() {
}
