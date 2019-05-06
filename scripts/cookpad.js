
module.exports = () => {

  const getTextContent = element => {
    if (element) {
      return element.textContent.trim();
    } else {
      return '';
    }
  };

  const title = getTextContent(document.querySelector('h1.recipe-title'));

  const amount = getTextContent(document.querySelector('span.servings_for'));
  const info = {
    amount,
  };

  const ingredientNames = Array.from(document.querySelectorAll('div.ingredient_row > div.ingredient_name > span.name'))
    .map(ingredient => ingredient.textContent);
  const ingredientQuantities = Array.from(document.querySelectorAll('div.ingredient_row > div.ingredient_quantity'))
    .map(ingredient => ingredient.textContent);

  const ingredients = ingredientNames.map((ingredientName, index) => ({
    item: ingredientName,
    amount: ingredientQuantities[index],
  }));

  const processes = Array.from(document.querySelectorAll('dd.instruction > p.step_text')).map(process => process.textContent.trim());

  const point = getTextContent(document.querySelector('div#advice'));

  return {
    title,
    info,
    ingredients,
    processes,
    point,
  };
};
