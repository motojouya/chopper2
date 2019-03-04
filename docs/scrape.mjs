
export default const scrape = document => {

  const informationNameMap = {
    '調理時間': 'time',
    '冷蔵保存': 'keepable',
    '人数': 'amount',
  };

  const title = document.querySelector('h1.entry-title').textContent;

  const infoText = document.querySelectorAll('div.entry-content > p')[2].textContent;
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

  const point = document.querySelector('h3.point + p').textContent;

  return {
    title,
    info,
    ingredients,
    processes,
    point,
  };
};
