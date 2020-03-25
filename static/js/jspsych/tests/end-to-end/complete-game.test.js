
const puppeteer = require('puppeteer');
const timeout = 15000;
const parameters = require('./parameters');
let { instrumental_conditioning, contingency_degradation, contingency_restoration } = parameters.parameters;

let browser;
let page;

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

describe('Browser run', () => {
    test('browser settings', async () => { 
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
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

    test('begin testing', async () => {
      await page.goto('http://localhost:22362' + href);
      await page.waitForSelector('#container-consent');
      await page.click(".btn-primary");
    }, timeout);
}, timeout);

describe('Demographics', () => {

  test('Demographics fill text inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-form');
    const input_year = await page.$('.input-year');
    await input_year.click();
    await input_year.type('20');
    await page.click('input[data-enable="cm"]');
    const input_height = await page.$('.jspsych-survey-multi-choice-radio-cm');
    await input_height.type('180');
    await page.click('.jspsych-survey-multi-choice-radio-kg');
    await page.click('.option-input-weight');
    const input_weight = await page.$('.option-input-weight');
    await input_weight.type('100');
  }, timeout);
  
  test('Demographics click inputs', async () => {
    await page.click("#jspsych-survey-multi-choice-response-0-0");
    await page.click("#jspsych-survey-multi-choice-response-4-0");
    await page.click("#jspsych-survey-multi-choice-response-5-0");
    await page.click("#jspsych-survey-multi-choice-response-6-0");
    await page.click("#jspsych-survey-multi-choice-response-7-0");
  }, timeout);

  test('Demographics submit survey', async () => {
    await page.click(".jspsych-btn");
  }, timeout);

}, timeout);


describe('Clinical Intro', () => {
    test('click after delay', async () => {
        await page.waitForSelector('.v-center-txt');
        // const text = await page.evaluate(() => document.querySelector('.v-center-txt').textContent);
        // await expect(text).toContain("We'd like to briefly ask you about some symptoms before the online game.  Press any key when you are ready.");
        await delay(1000);
        await page.click(".v-center-txt");
    }, timeout);
}, timeout);

describe('OCI-R', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-OSC-R');
    for (let index = 0; index < 18; index++) {
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-0 .jspsych-survey-highlight");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-OSC-R-next').click();
    });
  }, timeout);
}, timeout);

describe('MOVES', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-MOVES');
    for (let index = 0; index < 20; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-option-" + index + "-0 .form-radio");
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-0 .form-radio");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-MOVES-next').click();
    });
  }, timeout);
}, timeout);

describe('DASS', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-DASS');
    for (let index = 0; index < 21; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-DASS-next').click();
    });
  }, timeout);
}, timeout);

describe('ASRS-5', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-ASRS-5');
    for (let index = 0; index < 6; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .form-radio");
      await page.click("#jspsych-survey-multi-choice-" + index + " .form-radio");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-ASRS-5-next').click();
    });
  }, timeout);
}, timeout);

describe('EAT-26', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-EAT-26');
    for (let index = 0; index < 31; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-option-" + index + "-0 .form-radio");
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-0 .form-radio");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-EAT-26-next').click();
    });
  }, timeout);
}, timeout);

describe('RAADS-14', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-RAADS-14');
    for (let index = 0; index < 14; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .form-radio");
      await page.click("#jspsych-survey-multi-choice-" + index + " .form-radio");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-RAADS-14-next').click();
    });
  }, timeout);
}, timeout);

describe('PHQ-9', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PHQ-9');
    for (let index = 0; index < 9; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PHQ-9-next').click();
    });
  }, timeout);
}, timeout);

describe('GAD-7', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-GAD-7');
    for (let index = 0; index < 7; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-response-checkbox-0-0");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-GAD-7-next').click();
    });
  }, timeout);
}, timeout);

describe('ASRM', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-ASRM');
    for (let index = 0; index < 5; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-ASRM-next').click();
    });
  }, timeout);
}, timeout);

describe('PC-PTSD-5', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PC-PTSD-5');
    for (let index = 0; index < 6; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PC-PTSD-5-next').click();
    });
  }, timeout);
}, timeout);

describe('PRIME Screen', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PRIME');
    for (let index = 0; index < 12; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PRIME-next').click();
    });
  }, timeout);
}, timeout);

describe('AUDIT', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-AUDIT');
    for (let index = 0; index < 10; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .form-radio");
      await page.click("#jspsych-survey-multi-choice-" + index + " .form-radio");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-AUDIT-next').click();
    });
  }, timeout);
}, timeout);

describe('PGSI', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PGSI');
    for (let index = 0; index < 9; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .form-radio");
      await page.click("#jspsych-survey-multi-choice-" + index + " .form-radio");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PGSI-next').click();
    });
  }, timeout);
}, timeout);

describe('YIAT', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-YIAT');
    for (let index = 0; index < 12; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .form-radio");
      await page.click("#jspsych-survey-multi-choice-" + index + " .form-radio");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-YIAT-next').click();
    });
  }, timeout);
}, timeout);

describe('Smoking Status', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-smoking-status');
    await page.click("#jspsych-survey-multi-choice-option-0-0 .form-radio");
    await page.click("#jspsych-survey-multi-choice-option-1-0 .form-radio");
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-smoking-status-next').click();
    });
  }, timeout);
}, timeout);

describe('FTND', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-FTND');
    for (let index = 0; index < 6; index++) {
      await page.click("#jspsych-survey-multi-choice-" + index + " .form-radio");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-FTND-next').click();
    });
  }, timeout);
}, timeout);

describe('LSAS', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-LSAS');
    for (let index = 0; index < 24; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .f .jspsych-survey-highlight");
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .a .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .f .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .a .jspsych-survey-highlight");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-LSAS-next').click();
    });
  }, timeout);
}, timeout);

describe('ISI', () => {
  test('check inputs', async () => {  
    await page.waitForSelector('#jspsych-survey-multi-choice-ISI');
    for (let index = 0; index < 3; index++) {
      await page.click("#jspsych-survey-multi-choice-1-" + index + " .jspsych-survey-highlight");
    }
    for (let index = 1; index < 5; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-ISI-next').click();
    });
  }, timeout);
}, timeout);

describe('PID-5-BF', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PID-5-BF');
    for (let index = 0; index < 25; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
    }
  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PID-5-BF-next').click();
    });
  }, timeout);
}, timeout);


describe('SDS', () => {
  test('check inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-SDS');
    for (let index = 0; index < 3; index++) {
      await page.waitForSelector("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-" + index + " .jspsych-survey-highlight");
    }
    await page.select('.select-days-3', '5');
    await page.select('.select-days-4', '5');

  }, timeout);

  test('submit survey', async () => {
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-SDS-next').click();
    });
  }, timeout);
}, timeout);

describe('Clinical Close', () => {
    test('Text check and click after delay', async () => {
        await page.waitForSelector('.v-center-txt');
        const text = await page.evaluate(() => document.querySelector('.v-center-txt').textContent);
        await expect(text).toContain("That's it for the symptom questions. Now we're ready to start the online game.  Press any key when you are ready.");
        await delay(1000);
        await page.click(".v-center-txt");
    }, timeout);
}, timeout);

describe('VVR instrumental conditioning instructions OPEN INSTRUCTIONS', () => {
  test('Text check and click after delay', async () => {
      await page.waitForSelector('#jspsych-content');
      const text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
      await expect(text).toContain("You can now interact with the vending machine to earn snacks.");
      await delay(instrumental_conditioning.open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
  }, timeout);
}, timeout);

describe('VVR instrumental conditioning', () => {
  test('start', async () => {
    await page.waitForSelector('.vending-machine');
    await page.keyboard.press('ArrowLeft');
    for (let index = 1; index < instrumental_conditioning.interval_num; index++) {
      await delay(instrumental_conditioning.interval_duration + instrumental_conditioning.outcome_duration);
      await page.keyboard.press('ArrowLeft');
    }
  }, timeout);

  test('questions key press left/right', async () => {
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

  test('feedback text', async () => {
    await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

  test('questions key press left/right', async () => {
    await page.waitForSelector(".vvr-question-a");
    const innerTextOfButton = await page.$('.vvr-question-left');
    if (innerTextOfButton) {
      await page.keyboard.press('ArrowLeft');
    } else {
      await page.keyboard.press('ArrowRight');
    }

    await page.click(".ui-slider-handle");
    await page.click(".confirm-button");
  }, timeout);

  test('feedback text', async () => {
    await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

}, timeout);

describe('VVR instrumental conditioning CLOSE INSTRUCTIONS', () => {
  test('Text check and click after delay', async () => {
      await delay(instrumental_conditioning.feedback_duration);
      const text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
      await expect(text).toContain('Some text for close instructions VVR "instrumental conditioning"');
      await delay(instrumental_conditioning.close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
  }, timeout);

}, timeout);



describe('VVR contingency degradation instructions OPEN INSTRUCTIONS', () => {
  test('Text check and click after delay', async () => {
      await page.waitForSelector('#jspsych-content');
      const text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
      await expect(text).toContain("You can now interact with the vending machine to earn snacks.");
      await delay(contingency_degradation.open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
  }, timeout);
}, timeout);

describe('VVR contingency degradation', () => {
  test('start', async () => {
    await page.waitForSelector('.vending-machine');
    await page.keyboard.press('ArrowLeft');
    for (let index = 1; index < contingency_degradation.interval_num; index++) {
      await delay(contingency_degradation.interval_duration + contingency_degradation.outcome_duration);
      await page.keyboard.press('ArrowLeft');
    }
  }, timeout);

  test('questions key press left/right', async () => {
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

  test('feedback text', async () => {
    await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

  test('questions key press left/right', async () => {
    await page.waitForSelector(".vvr-question-a");
    const innerTextOfButton = await page.$('.vvr-question-left');
    if (innerTextOfButton) {
      await page.keyboard.press('ArrowLeft');
    } else {
      await page.keyboard.press('ArrowRight');
    }

    await page.click(".ui-slider-handle");
    await page.click(".confirm-button");
  }, timeout);

  test('feedback text', async () => {
    await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

}, timeout);

describe('VVR contingency degradation CLOSE INSTRUCTIONS', () => {
  test('Text check and click after delay', async () => {
      await delay(contingency_degradation.feedback_duration);
      const text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
      await expect(text).toContain('Some text for close instructions VVR "contingency degradation"');
      await delay(contingency_degradation.close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
  }, timeout);

}, timeout);


describe('VVR contingency restoration instructions OPEN INSTRUCTIONS', () => {
  test('Text check and click after delay', async () => {
      await page.waitForSelector('#jspsych-content');
      const text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
      await expect(text).toContain("You can now interact with the vending machine to earn snacks.");
      await delay(contingency_restoration.open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
  }, timeout);
}, timeout);

describe('VVR contingency restoration ', () => {
  test('start', async () => {
    await page.waitForSelector('.vending-machine');
    await page.keyboard.press('ArrowLeft');
    for (let index = 1; index < contingency_restoration.interval_num; index++) {
      await delay(contingency_restoration.interval_duration + contingency_restoration.outcome_duration);
      await page.keyboard.press('ArrowLeft');
    }
  }, timeout);

  test('questions key press left/right', async () => {
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

  test('feedback text', async () => {
    await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

  test('questions key press left/right', async () => {
    await page.waitForSelector(".vvr-question-a");
    const innerTextOfButton = await page.$('.vvr-question-left');
    if (innerTextOfButton) {
      await page.keyboard.press('ArrowLeft');
    } else {
      await page.keyboard.press('ArrowRight');
    }

    await page.click(".ui-slider-handle");
    await page.click(".confirm-button");
  }, timeout);

  test('feedback text', async () => {
    await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Correct');
  }, timeout);

}, timeout);

describe('VVR contingency restoration  CLOSE INSTRUCTIONS', () => {
  test('Text check and click after delay', async () => {
      await delay(contingency_restoration.feedback_duration);
      const text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
      await expect(text).toContain('Some text for close instructions VVR "contingency restoration"');
      await delay(contingency_restoration.close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
  }, timeout);

  
  test('finishing', async () => {
    await page.waitForSelector("#container-not-an-ad");
    const text = await page.evaluate(() => document.body.textContent);
  }, timeout);
  afterAll(async () => {
    await browser.close();
  });
}, timeout);