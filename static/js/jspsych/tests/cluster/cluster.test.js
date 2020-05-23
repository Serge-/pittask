
const { Cluster } = require('puppeteer-cluster');

require('../../jspsych.js');

// Call function with parameters
jsPsych.data.get();

let { instrumental_conditioning, contingency_degradation, contingency_restoration } = parameters.parameters;
const timeout = 145000;

// sets number of concurrency working process
const concurrency_number = 1;
const headless_browser = false;
 
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRangeInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


describe('Dummy data generation', () => {
  test('complete game', async () => {
    // Create a cluster of workers
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_CONTEXT,
        maxConcurrency: concurrency_number,
        puppeteerOptions: {
          headless: headless_browser,
          slowMo: 10,
          devtools: false,
          timeout: timeout
        },
        timeout: timeout
    });

    // Define a task (in this case: screenshot of page)
    await cluster.task(async ({ page, data: url }) => {
        await page.goto(url);
        await page.waitForSelector('#container-consent');
        await page.evaluate(() => {
          document.querySelector('.btn-primary').click();
        });

        // // Demographics
        // await page.waitForSelector('#jspsych-survey-multi-choice-form');
        // const input_year = await page.$('.input-year');
        // await input_year.click();
        // await input_year.type(getRangeInt(20, 99) + '');
        // await page.click('input[data-enable="cm"]');
        // const input_height = await page.$('.jspsych-survey-multi-choice-radio-cm');
        // await input_height.type(getRangeInt(140, 250) + '');
        // await page.click('.jspsych-survey-multi-choice-radio-kg');
        // await page.click('.option-input-weight');
        // const input_weight = await page.$('.option-input-weight');
        // await input_weight.type(getRangeInt(40, 200) + '');
        // await page.click("#jspsych-survey-multi-choice-response-0-" + getRandomInt(3));
        // await page.click("#jspsych-survey-multi-choice-response-4-0");
        // await page.click("#jspsych-survey-multi-choice-response-5-0");
        // await page.click("#jspsych-survey-multi-choice-response-6-0");
        // await page.click("#jspsych-survey-multi-choice-response-7-0");
        // await page.evaluate(() => {
        //   document.querySelector(".jspsych-btn").click();
        // });

        // // Clinical Intro
        // await page.waitForSelector('.v-center-txt');
        // await page.waitFor(1000);
        // await page.click(".v-center-txt");

        // // OCI-R
        // await page.waitForSelector('#jspsych-survey-multi-choice-OSC-R');
        // for (let index = 0; index < 18; index++) {
        //   const itemID = getRandomInt(5);
        //   await delay(getRandomInt(100));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
        // }
      
        // await page.evaluate(() => {
        //   document.querySelector("#jspsych-survey-multi-choice-option-1-0 .jspsych-survey-highlight").click();
        //   document.querySelector("#jspsych-survey-multi-choice-option-2-3 .jspsych-survey-highlight").click();
        // });
        // await delay(getRandomInt(200));
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-OSC-R-next').click();
        // });

        // // MOVES
        // await page.waitForSelector('#jspsych-survey-multi-choice-MOVES');
        // for (let index = 0; index < 20; index++) {
        //   const itemID = getRandomInt(4);
        //   await page.waitForSelector("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .form-radio");
        //   await delay(getRandomInt(100));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .form-radio");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-MOVES-next').click();
        // });

        // // DASS
        // await page.waitForSelector('#jspsych-survey-multi-choice-DASS');
        // for (let index = 0; index < 21; index++) {
        //   const itemID = getRandomInt(4);
        //   await delay(getRandomInt(120));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-DASS-next').click();
        // });

        // // ASRS-5
        // await page.waitForSelector('#jspsych-survey-multi-choice-ASRS-5');
        // await delay(100);
        // for (let index = 0; index < 6; index++) {
        //   const itemID = getRandomInt(5);
        //   await delay(getRandomInt(100));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-ASRS-5-next').click();
        // });

        // // EAT-26
        // await page.waitForSelector('#jspsych-survey-multi-choice-EAT-26');
        // await delay(100);
        // for (let index = 0; index < 30; index++) {
        //   const itemID = getRandomInt(5);
        //   await delay(getRandomInt(90));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .form-radio");
        // }
        // await page.click("#jspsych-survey-multi-choice-option-30-0 .form-radio");
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-EAT-26-next').click();
        // });

        // // RAADS-14
        // await page.waitForSelector('#jspsych-survey-multi-choice-RAADS-14');
        // await delay(100);
        // for (let index = 0; index < 14; index++) {
        //   const itemID = getRandomInt(4);
        //   await delay(getRandomInt(120));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .form-radio");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-RAADS-14-next').click();
        // });

        // // PHQ-9
        // await page.waitForSelector('#jspsych-survey-multi-choice-PHQ-9');
        // await delay(100);
        // for (let index = 0; index < 9; index++) {
        //   const itemID = getRandomInt(4);
        //   await delay(getRandomInt(150));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .jspsych-survey-highlight");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-PHQ-9-next').click();
        // });

        // // GAD-7
        // await page.waitForSelector('#jspsych-survey-multi-choice-GAD-7');
        // await delay(100);
        // for (let index = 0; index < 7; index++) {
        //   const itemID = getRandomInt(4);
        //   await delay(getRandomInt(150));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .jspsych-survey-highlight");
        // }
        // const itemID = getRandomInt(3);
        // await page.click("#jspsych-survey-multi-choice-response-checkbox-0-" + itemID);
        // await delay(getRandomInt(550));
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-GAD-7-next').click();
        // });

        // // LSAS
        // await page.waitForSelector('#jspsych-survey-multi-choice-LSAS');
        // for (let index = 0; index < 24; index++) {
        //   const itemID = getRandomInt(4);
        //   await delay(getRandomInt(100));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index + "-0-" + itemID + " .jspsych-survey-highlight");
        //   await page.click("#jspsych-survey-multi-choice-option-" + index + "-1-" + itemID + " .jspsych-survey-highlight");
        // }
        // await delay(100);
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-LSAS-next').click();
        // });

        // // ASRM
        // await page.waitForSelector('#jspsych-survey-multi-choice-ASRM');
        // await delay(100);
        // for (let index = 0; index < 5; index++) {
        //   const itemID = getRandomInt(5);
        //   await delay(getRandomInt(150));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-ASRM-next').click();
        // });

        // // PTSD-5
        // await page.waitForSelector('#jspsych-survey-multi-choice-PC-PTSD-5');
        // const itemIDMain = 0;
        // if(itemIDMain === 0) {
        //   await page.click("#jspsych-survey-multi-choice-option-0-0 .jspsych-survey-highlight");
        //   for (let index = 1; index < 6; index++) {
        //     const itemID = getRandomInt(2);
        //     await delay(getRandomInt(150));
        //     await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
        //   }
        // } else {
        //     await page.click("#jspsych-survey-multi-choice-option-0-1 .jspsych-survey-highlight");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-PC-PTSD-5-next').click();
        // });
       
        // // PRIME
        // await page.waitForSelector('#jspsych-survey-multi-choice-PRIME');
        // await delay(100);
        // for (let index = 0; index < 12; index++) {
        //   const itemID = getRandomInt(7);
        //   await delay(getRandomInt(150));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-PRIME-next').click();
        // });

        // // AUDIT
        // await page.waitForSelector('#jspsych-survey-multi-choice-AUDIT');
        // await delay(100);
        // for (let index = 0; index < 8; index++) {
        //   const itemID = getRandomInt(5);
        //   await delay(getRandomInt(150));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
        // }
        // for (let index = 8; index < 10; index++) {
        //   const itemID = getRandomInt(2);
        //   await delay(getRandomInt(150));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-AUDIT-next').click();
        // });

        // // PGSI
        // await page.waitForSelector('#jspsych-survey-multi-choice-PGSI');
        // await delay(90);
        // for (let index = 0; index < 9; index++) {
        //   const itemID = getRandomInt(4);
        //   await delay(getRandomInt(100));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-PGSI-next').click();
        // });
  
        // // YIAT
        // await page.waitForSelector('#jspsych-survey-multi-choice-YIAT');
        // await delay(90);
        // for (let index = 0; index < 12; index++) {
        //   const itemID = getRandomInt(5);
        //   await delay(getRandomInt(80));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-YIAT-next').click();
        // });

        // // Smoking Status FTND
        // const itemIDMainSmoking = getRandomInt(2);
        // const itemIDFTND = getRandomInt(2);
        // await page.waitForSelector('#jspsych-survey-multi-choice-smoking-status');
        // await delay(getRandomInt(150));
        // await page.click("#jspsych-survey-multi-choice-option-0-" + itemIDMainSmoking + " .form-radio");
        // await delay(getRandomInt(150));
        // await page.click("#jspsych-survey-multi-choice-option-1-" + itemIDFTND + " .form-radio");
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-smoking-status-next').click();
        // });
        // if(itemIDFTND <= 1) {
        //     await page.waitForSelector('#jspsych-survey-multi-choice-FTND');
        //     for (let index = 0; index < 6; index++) {
        //       await delay(getRandomInt(150));
        //       await page.click("#jspsych-survey-multi-choice-" + index + " .form-radio");
        //     }
        //     await page.evaluate(() => {
        //       document.querySelector('#jspsych-survey-multi-choice-FTND-next').click();
        //     });
        // }

        // // ISI
        // await page.waitForSelector('#jspsych-survey-multi-choice-ISI');
        // await delay(getRandomInt(50));
        // for (let index = 0; index < 3; index++) {
        //   const itemID = getRandomInt(5);
        //   await delay(getRandomInt(100));
        //   await page.click("#jspsych-survey-multi-choice-option-0-" + index + "-" + itemID + " .jspsych-survey-highlight");
        // }
        // for (let index = 1; index < 5; index++) {
        //   const itemID = getRandomInt(5);
        //   await delay(getRandomInt(100));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .jspsych-survey-highlight");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-ISI-next').click();
        // });

        // // PID-5-BF
        // await page.waitForSelector('#jspsych-survey-multi-choice-PID-5-BF');
        // await delay(getRandomInt(50));
        // for (let index = 0; index < 25; index++) {
        //   const itemID = getRandomInt(4);
        //   await delay(getRandomInt(100));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .jspsych-survey-highlight");
        // }
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-PID-5-BF-next').click();
        // });

        // // SDS
        // await page.waitForSelector('#jspsych-survey-multi-choice-SDS');
        // await delay(getRandomInt(80));
        // for (let index = 0; index < 3; index++) {
        //   const itemID = getRandomInt(4);
        //   await delay(getRandomInt(100));
        //   await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
        // }
        // await delay(getRandomInt(100));
        // await page.select('.select-days-3', '5');
        // await delay(getRandomInt(100));
        // await page.select('.select-days-4', '5');
        // await page.evaluate(() => {
        //   document.querySelector('#jspsych-survey-multi-choice-SDS-next').click();
        // });

        // // Clinical Close
        // await page.waitForSelector('.v-center-txt');
        // const textClinicalClose = await page.evaluate(() => document.querySelector('.v-center-txt').textContent);
        // await expect(textClinicalClose).toContain("That's it for the symptom questions. Now we're ready to start the online game.  Press any key when you are ready.");
        // await delay(1000);
        // await page.click(".v-center-txt");

  
        // // VVR instrumental conditioning instructions OPEN INSTRUCTIONS
        // await page.waitForSelector('#jspsych-content');
        // const text_instrumental_conditioning_open = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
        // await expect(text_instrumental_conditioning_open).toContain("You can now interact with the vending machine to earn snacks.");
        // await delay(instrumental_conditioning.open_instruct_latency);
        // await page.click("#jspsych-html-keyboard-response-stimulus");

        // VVR instrumental conditioning
        await page.waitForSelector('.vending-machine');
        for (let index = 0; index < getRandomInt(7); index++) {
          await delay(100);
          await page.keyboard.press('ArrowLeft');
        }
        for (let index = 1; index < instrumental_conditioning.interval_num; index++) {
          for (let index = 0; index < getRandomInt(7); index++) {
            await delay(100);
            await page.keyboard.press('ArrowRight');
          }
          await delay(instrumental_conditioning.interval_duration + instrumental_conditioning.outcome_duration);
        }
        await page.waitForSelector(".vvr-question-a");
        const innerTextOfButton_inst_cond_first = await page.$('.vvr-question-left');
        if (innerTextOfButton_inst_cond_first !== null) {
          await page.keyboard.press('ArrowLeft');
        } else {
          await page.keyboard.press('ArrowRight');
        }
        await delay(100);
        await page.click(".ui-slider-handle");
        await page.click(".confirm-button");

        await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('Correct');
        
        await page.waitForSelector(".vvr-question-a");
        const innerTextOfButton_inst_cond_first_second = await page.$('.vvr-question-left');
        if (innerTextOfButton_inst_cond_first_second !== null) {
          await page.keyboard.press('ArrowLeft');
        } else {
          await page.keyboard.press('ArrowRight');
        }

        await delay(100);
        await page.click(".ui-slider-handle");
        await page.click(".confirm-button");
      
        await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
        const textSecond = await page.evaluate(() => document.body.textContent);
        expect(textSecond).toContain('Correct');

        // VVR instrumental conditioning instructions CLOSE INSTRUCTIONS
        await delay(instrumental_conditioning.feedback_duration);
        await page.$('#jspsych-html-keyboard-response-stimulus');
        const text_instrumental_conditioning_close = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
        await expect(text_instrumental_conditioning_close).toContain(instrumental_conditioning.close_instruct_text);
        await delay(instrumental_conditioning.close_instruct_latency);
        await page.click("#jspsych-html-keyboard-response-stimulus");
        // ============================================================ >

    
        // // VVR contingency degradation instructions OPEN INSTRUCTIONS
        // await page.waitForSelector('#jspsych-content');
        // const text_contingency_degradation_OPEN = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
        // await expect(text_contingency_degradation_OPEN).toContain("You can now interact with the vending machine to earn snacks.");
        // await delay(contingency_degradation.open_instruct_latency);
        // await page.click("#jspsych-html-keyboard-response-stimulus");

        // // VVR contingency degradation
        // await page.waitForSelector('.vending-machine');
        // for (let index = 0; index < getRandomInt(6); index++) {
        //   await delay(100);
        //   await page.keyboard.press('ArrowRight');
        // }
        // for (let index = 1; index < contingency_degradation.interval_num; index++) {
        //   for (let index = 0; index < getRandomInt(6); index++) {
        //     await delay(100);
        //     await page.keyboard.press('ArrowRight');
        //   }
        //   await delay(contingency_degradation.interval_duration + contingency_degradation.outcome_duration);
        // }

        // await page.waitForSelector(".vvr-question-a");
        // const innerTextOfButton_const_deg_first = await page.$('.vvr-question-left')
        // if (innerTextOfButton_const_deg_first !== null) {
        //   await page.keyboard.press('ArrowLeft');
        // } else {
        //   await page.keyboard.press('ArrowRight');
        // }
        // await delay(100);
        // await page.click(".ui-slider-handle");
        // await page.click(".confirm-button");

        // await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
        // const text_correct = await page.evaluate(() => document.body.textContent);
        // await expect(text_correct).toContain('Correct');


        // await page.waitForSelector(".vvr-question-a");
        // const innerTextOfButton_const_deg_second = await page.$('.vvr-question-left')
        // if (innerTextOfButton_const_deg_second !== null) {
        //   await page.keyboard.press('ArrowLeft');
        // } else {
        //   await page.keyboard.press('ArrowRight');
        // }
        // await delay(100);
        // await page.click(".ui-slider-handle");
        // await page.click(".confirm-button");

        // await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
        // const text_correct_secondary = await page.evaluate(() => document.body.textContent);
        // await expect(text_correct_secondary).toContain('Correct');


        // // VVR contingency degradation instructions CLOSE INSTRUCTIONS
        // await delay(contingency_degradation.feedback_duration);
        // const text_contingency_degradation_close = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
        // await expect(text_contingency_degradation_close).toContain('Some text for close instructions VVR "contingency degradation"');
        // await delay(contingency_degradation.close_instruct_latency);
        // await page.click("#jspsych-html-keyboard-response-stimulus");
        // // ============================================================ >


        // // ============================================================ >
        // // VVR contingency restoration instructions OPEN INSTRUCTIONS
        // await page.waitForSelector('#jspsych-content');
        // const text_contingency_restoration_open = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
        // await expect(text_contingency_restoration_open).toContain("You can now interact with the vending machine to earn snacks.");
        // await delay(contingency_restoration.open_instruct_latency);
        // await page.click("#jspsych-html-keyboard-response-stimulus");

        // await page.waitForSelector('.vending-machine');
        // for (let index = 0; index < getRandomInt(7); index++) {
        //   await delay(100);
        //   await page.keyboard.press('ArrowLeft');
        // }
        // for (let index = 1; index < contingency_restoration.interval_num; index++) {
        //   for (let index = 0; index < getRandomInt(7); index++) {
        //     await delay(100);
        //     await page.keyboard.press('ArrowLeft');
        //   }
        //   await delay(contingency_restoration.interval_duration + contingency_restoration.outcome_duration);
      
        // }

        // await page.waitForSelector(".vvr-question-a");
        // const innerTextOfButton_rest = await page.$('.vvr-question-left')
        // if (innerTextOfButton_rest) {
        //   await page.keyboard.press('ArrowLeft');
        // } else {
        //   await page.keyboard.press('ArrowRight');
        // }
        // await delay(100);
        // await page.click(".ui-slider-handle");
        // await page.click(".confirm-button");

        // await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
        // const text_res_correct = await page.evaluate(() => document.body.textContent);
        // expect(text_res_correct).toContain('Correct');


        // await page.waitForSelector(".vvr-question-a");
        // const innerTextOfButtonLast = await page.$('.vvr-question-left');
        // if (innerTextOfButtonLast) {
        //   await page.keyboard.press('ArrowLeft');
        // } else {
        //   await page.keyboard.press('ArrowRight');
        // }
        // await delay(100);
        // await page.click(".ui-slider-handle");
        // await page.click(".confirm-button");

        // await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
        // const text_res_correct_last = await page.evaluate(() => document.body.textContent);
        // expect(text_res_correct_last).toContain('Correct');

        // // VVR contingency restoration instructions CLOSE INSTRUCTIONS
        // await delay(contingency_restoration.feedback_duration);
        // const text_contingency_restoration_close = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').textContent);
        // await expect(text_contingency_restoration_close).toContain('Some text for close instructions VVR "contingency restoration"');
        // await delay(contingency_restoration.close_instruct_latency);
        // await page.click("#jspsych-html-keyboard-response-stimulus");
        // // ============================================================ >

        // await page.waitForSelector("#container-not-an-ad");

    });

    // In case of problems, log them
    cluster.on('taskerror', (err, data) => {
      console.log(`DEBUG - Error with cluster ${data}: ${err.message}`);
    });

    function makeid() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
      return text;
    }
    
    for (let index = 0; index < concurrency_number; index++) {
      let assignmentId = "debug" + makeid();
      let hitId = "debug" + makeid();
      let workerId = "debug" + makeid();
      let href = "/consent?assignmentId=" + assignmentId + "&hitId=" + hitId + "&workerId=" + workerId + "&mode=debug";
  
      cluster.queue('http://localhost:22362' + href);
    }
    
    await cluster.idle();
    await cluster.close();
  }, timeout);
}, timeout);