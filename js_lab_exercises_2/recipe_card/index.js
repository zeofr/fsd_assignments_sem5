const recipe = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
};

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log('Ingredients:');
recipe.ingredients.forEach((i) => console.log(i));
