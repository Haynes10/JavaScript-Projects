// Function to generate receipt and calculate total price
function getReceipt() {
  // Initialize receipt text and totals
  var text1 = "<h3>You Ordered:</h3>";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");

  // Check which size was selected
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 += selectedSize + "<br>";
      if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
      } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
      } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
      } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
      } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
      }
    }
  }

  runningTotal = sizeTotal;
  console.log(selectedSize + " = $" + sizeTotal + ".00");
  console.log("size text1: " + text1);
  console.log("subtotal: $" + runningTotal + ".00");

  // Pass running total and text to toppings calculation
  getTopping(runningTotal, text1);
}

// Function to calculate toppings and update receipt
function getTopping(runningTotal, text1) {
  var toppingTotal = 0;
  var selectedTopping = [];
  var toppingArray = document.getElementsByClassName("toppings");

  for (var j = 0; j < toppingArray.length; j++) {
    if (toppingArray[j].checked) {
      selectedTopping.push(toppingArray[j].value);
      console.log("selected topping item: (" + toppingArray[j].value + ")");
      text1 += toppingArray[j].value + "<br>";
    }
  }

  var toppingCount = selectedTopping.length;
  if (toppingCount > 1) {
    toppingTotal = toppingCount - 1; // First topping is free
  } else {
    toppingTotal = 0;
  }

  runningTotal += toppingTotal;
  console.log("total selected topping items: " + toppingCount);
  console.log(
    toppingCount +
      " topping - 1 free topping = " +
      "$" +
      toppingTotal +
      ".00"
  );
  console.log("topping text1: " + text1);
  console.log("Purchase Total: " + "$" + runningTotal + ".00");

  // Display final order and total price
  document.getElementById("showText").innerHTML = text1;
  document.getElementById("totalPrice").innerHTML =
    "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
