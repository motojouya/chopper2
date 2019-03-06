
const calculateColumnWidth = columns => {
  switch (columns) {
    case 1: return 12;
    case 2: return 6;
    case 3: return 4;
    case 4: return 3;
    case 5:
    case 6: return 2;
    default: return 1;
  }
};

export default renderRecipe = recipes => {
  return (
    <ul>
      { recipes.map(recipe => (<li><Recipe recipe={recipes}></li>)) }
    </ul>
  );
}

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h2>{ recipe.title }</h2>
      <a href={recipe.url}>{ recipe.url }</a>
      { recipe.info &&
        <div>
          <h3>info</h3>
          <dl>
            <dt>時間</dt>
            <dd>{ recipe.info.time } 分</dd>
            <dt>人数</dt>
            <dd>{ recipe.info.amount } 人前</dd>
            <dt>冷蔵保存</dt>
            <dd>{ recipe.info.keepable } 日</dd>
          </dl>
        </div>
      }
      { recipe.ingredients &&
        <div>
          <h3>材料</h3>
          <dl>{
            recipe.ingredients.map(ingredient => {
              return (
                <React.Fragment>
                  <dt>{ ingredient.item }</dt>
                  <dd>{ ingredient.amount }</dd>
                </React.Fragment>
              );
            })
          }</dl>
        </div>
      }
      { recipe.processes &&
        <div>
          <h3>手順</h3>
          <ol>{
            recipe.processes.map(order => {
              return (
                <li>{ order }</li>
              );
            })
          }</ol>
        </div>
      }
      { recipe.point &&
        <div>
          <h3>ポイント</h3>
          <p>{ recipe.point }</p>
        </div>
      }
    </div>
  );
};
