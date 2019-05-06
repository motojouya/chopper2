
module.exports = () => {

  const getTextContent = element => {
    if (element) {
      return element.textContent;
    } else {
      return '';
    }
  };

  const title = getTextContent(document.querySelector('h1.entry-title[itemprop="name"]'));

  const amount = getTextContent(document.querySelector('span[itemprop="yield"]'));
  const info = {
    amount,
    keepable: '',
    time: '',
  };

  const ingredients = Array.from(document.querySelectorAll('div#r_contents > p'))
    .map(ingredient => ingredient.textContent)
    .map(ingredient => ({ item: ingredient }));

  const processes = Array.from(document.querySelectorAll('div.ins_des')).map(process => getTextContent(process));

  return {
    title,
    info,
    ingredients,
    processes,
    point: '',
  };
};
