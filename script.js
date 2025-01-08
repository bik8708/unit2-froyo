// const froyoOrders = ["vanilla", "strawberry", "coffee"];

function promptFlavors() {
  const customerChoice = prompt("What flavor would you like?");

  const ordersArray = customerChoice.split(",");

  console.log(ordersArray);

  let flavorTracker = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
  };

  for (let i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i] === "vanilla") {
      flavorTracker.vanilla += 1;
    } else if (ordersArray[i] === "strawberry") {
      flavorTracker.strawberry += 1;
    } else if (ordersArray[i] === "coffee") {
      flavorTracker.coffee += 1;
    }
  }
  console.log(flavorTracker);
}

promptFlavors();
