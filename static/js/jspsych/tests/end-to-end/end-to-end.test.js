
const puppeteer = require('puppeteer');
const timeout = 10000;

describe('VVR stage', () => {

  let browser;
  let page;

  test('browser rules', async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      devtools: false,
    });

    page = await browser.newPage();
    page.emulate({
      viewport: {
        width: 800,
        height: 800
      },
      userAgent: ''
    });
  })

  function makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  let assignmentId = "debug" + makeid();
  let hitId = "debug" + makeid();
  let workerId = "debug" + makeid();
  let href = "/consent?assignmentId=" + assignmentId + "&hitId=" + hitId + "&workerId=" + workerId + "&mode=debug"

  test('start vvr stage', async () => {
    await page.goto('http://localhost:22362' + href);
    await page.waitForSelector('#container-consent');
    await page.click(".btn-primary");
  }, timeout);

  // vvr learning contingency degradation
  test('learning instrumental conditioning', async () => {
    await page.waitForSelector('.vending-machine');
    await page.keyboard.press('ArrowLeft');
  }, timeout);

  test('instrumental conditioning questions left', async () => {
    await page.waitForSelector(".vvr-question-a");
    const innerTextOfButton = await page.$('.vvr-question-left')
    if (innerTextOfButton) {
      await page.keyboard.press('ArrowLeft');
    } else {
      await page.keyboard.press('ArrowRight');
    }

    await page.click(".ui-slider-handle");
    await page.click(".confirm-button");
  }, timeout);

  test('instrumental conditioning feedback text', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

  test('instrumental conditioning questions right', async () => {
    await page.waitForSelector(".vvr-question-a");
    const innerTextOfButton = await page.$('.vvr-question-left')
    if (innerTextOfButton) {
      await page.keyboard.press('ArrowLeft');
    } else {
      await page.keyboard.press('ArrowRight');
    }

    await page.click(".ui-slider-handle");
    await page.click(".confirm-button");
  }, timeout);

  test('instrumental conditioning feedback text', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);



  // vvr learning contingency degradation
  test('learning contingency degradation', async () => {
    await page.waitForSelector('.vending-machine');
    await page.keyboard.press('ArrowLeft');
  }, timeout);

  test('contingency degradation questions left', async () => {
    await page.waitForSelector(".vvr-question-a");
    const innerTextOfButton = await page.$('.vvr-question-left')
    if (innerTextOfButton) {
      await page.keyboard.press('ArrowLeft');
    } else {
      await page.keyboard.press('ArrowRight');
    }

    await page.click(".ui-slider-handle");
    await page.click(".confirm-button");
  }, timeout);

  test('contingency degradation feedback text', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

  test('contingency degradation questions right', async () => {
    await page.waitForSelector(".vvr-question-a");
    const innerTextOfButton = await page.$('.vvr-question-left')
    if (innerTextOfButton) {
      await page.keyboard.press('ArrowLeft');
    } else {
      await page.keyboard.press('ArrowRight');
    }

    await page.click(".ui-slider-handle");
    await page.click(".confirm-button");
  }, timeout);

  test('contingency degradation feedback text', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);



  // vvr learning contingency restoration
  test('learning contingency restoration', async () => {
    await page.waitForSelector('.vending-machine');
    await page.keyboard.press('ArrowLeft');
  }, timeout);

  test('contingency restoration questions left', async () => {
    await page.waitForSelector(".vvr-question-a");
    const innerTextOfButton = await page.$('.vvr-question-left')
    if (innerTextOfButton) {
      await page.keyboard.press('ArrowLeft');
    } else {
      await page.keyboard.press('ArrowRight');
    }

    await page.click(".ui-slider-handle");
    await page.click(".confirm-button");
  }, timeout);

  test('contingency restoration feedback text', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

  test('contingency restoration questions right', async () => {
    await page.waitForSelector(".vvr-question-a");
    const innerTextOfButton = await page.$('.vvr-question-left')
    if (innerTextOfButton) {
      await page.keyboard.press('ArrowLeft');
    } else {
      await page.keyboard.press('ArrowRight');
    }

    await page.click(".ui-slider-handle");
    await page.click(".confirm-button");
  }, timeout);
  
  test('contingency restoration feedback text', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

  afterAll(async () => {
    await browser.close();
  });
}, timeout);