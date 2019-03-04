
export default const renderRecipe = (recipe, clear, width) => {
  return (
    <div>
      <h2>{ recipe.title }</h2>
      <button onClick={clear}>clear</button>
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
