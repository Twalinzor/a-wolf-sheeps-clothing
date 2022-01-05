function sheepWarning(sheep) {
  if (sheep[sheep.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${
      sheep.length - (sheep.indexOf("wolf") + 1)
    }! You are about to be eaten by a wolf!`;
  }
}
