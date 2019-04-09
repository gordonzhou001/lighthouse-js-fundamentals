var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
// while loop
// Choose another index 'a' since 'i' has been declared

let a = ingredients.length;
while (a - 1 >= 0){
  console.log(ingredients[a - 1]);
  a--;
}

//for loop

for (a = ingredients.length - 1; a >= 0; a--){
  console.log(ingredients[a]);
}



