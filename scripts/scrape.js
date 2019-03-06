
const fs = require('fs');
const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');

const mariegohan = require('./mariegohan')

const execute = async (url, scraper) => {

  try {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    const page = await browser.defaultBrowserContext().newPage();

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const result = await page.evaluate(scraper);
    result.url = url;

    return result;

  } catch (err) {
    console.log(err);
    throw err;
  }
}

const scrape = () => {

  const date = readlineSync.question('When will you cook? Answer in ymd.\n');
  console.log(`\nyou will cook at ${date}.\n`);

  const urls = [];
  let recipe;
  do {
    recipe = readlineSync.question('Tell me recipe.\n');
    if (recipe) {
      urls.push(recipe);
      console.log(`\nrecipe is ${recipe}\n`);
    }
  } while (recipe);

  Promise.all(urls.map(url => execute(url, mariegohan))).then(results => {

    try {
      fs.writeFileSync(`docs/recipes/${date}.json`, JSON.stringify(results));
      console.log(`${date}.json was created.`, results);
    } catch(err) {
      console.log(err);
    }
  });
};

scrape();
