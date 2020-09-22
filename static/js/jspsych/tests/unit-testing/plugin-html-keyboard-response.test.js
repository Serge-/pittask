
const puppeteer = require('puppeteer');
const timeout = 35000;
require('../../jspsych.js');

let browser;
let page;
let click = 1000;

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

function getRangeInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

describe('Browser run', () => {
    test('browser settings', async () => { 
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 0,
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

    test('open browser', async () => {
      await page.goto('http://localhost:22362' + href);
      await page.waitForSelector('#container-consent');
      await page.click(".btn-primary");
    }, timeout);
}, timeout);


describe('Keyboard and mouse activity', () => {
	test('mouse click', async () => {
		await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
		const close_instruct_latency = await page.evaluate(() => close_instruct_latency);
		console.log(jsPsych.data.displayData());
		for (let index = 0; index < click; index++) {
			await page.click("#jspsych-html-keyboard-response-stimulus");
			console.log(index);
		}
		await delay(close_instruct_latency);
		// await page.waitForSelector("#jspsych-data-display");
		await page.click("#jspsych-html-keyboard-response-stimulus");
		const json_text = await page.evaluate(() => document.querySelector('#jspsych-data-display').innerText);
		console.log(JSON.parse(JSON.parse(json_text)[1].events).length - 3);
	}, timeout)

	afterAll(async () => {
		await browser.close();
	});

	test('open browser', async () => {
		await page.goto('http://localhost:22362' + href);
		await page.waitForSelector('#container-consent');
		await page.click(".btn-primary");
	  }, timeout);

	test('keyboard press', async () => {
		await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
		const close_instruct_latency = await page.evaluate(() => close_instruct_latency);
		
		for (let index = 0; index < click; index++) {
			await page.click("#jspsych-html-keyboard-response-stimulus");
			await page.keyboard.press('K');
			console.log(index);
		}
		await delay(close_instruct_latency);
		// await page.waitForSelector("#jspsych-data-display");
		await page.click("#jspsych-html-keyboard-response-stimulus");
		const json_text = await page.evaluate(() => document.querySelector('#jspsych-data-display').innerText);
		console.log(JSON.parse(JSON.parse(json_text)[1].events).length - 3);
	}, timeout)
}, timeout);

describe('Finishing testing', () => {
	afterAll(async () => {
	  await browser.close();
	});
  }, timeout);
