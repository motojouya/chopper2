
module.exports = () => {

  const getTextContent = element => {
    if (element) {
      return element.textContent;
    } else {
      return '';
    }
  };

  const informationNameMap = {
    '調理時間': 'time',
    '冷蔵保存': 'keepable',
    '人数': 'amount',
  };

  const title = getTextContent(document.querySelector('h1.entry-title'));

  const infoText = getTextContent(document.querySelectorAll('div.entry-content > p')[2]);
  const info = infoText.split('　').filter(text => text).reduce((acc, text) => {
    const [name, value] = text.split('：');
    acc[informationNameMap[name]] = value;
    return acc;
  }, {});

  const ingredients = Array.from(document.querySelectorAll('h3.ingredients + ul > li'))
    .map(ingredient => ingredient.textContent)
    .map(ingredient => {
      const [item, amount] = ingredient.split('　');
      return { item, amount };
    });

  const processes = Array.from(document.querySelectorAll('h3.process + ol > li')).map(process => process.textContent.split('<img')[0]);

  const point = getTextContent(document.querySelector('h3.point + p'));

  return {
    title,
    info,
    ingredients,
    processes,
    point,
  };
};
