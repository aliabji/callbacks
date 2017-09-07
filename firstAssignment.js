function findWaldo(arr, found) {
  arr.forEach(function (currentValue, index){
    if (currentValue === "Waldo") {
      found(currentValue, index);
    }  
  })
}



function actionWhenFound(name, index) {
  console.log("Found ", name," at index",index,"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);