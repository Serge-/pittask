test('Demographics fill text inputs', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-form');
    const selector = await page.$('.input-year');
    await selector.click();
    await selector.type( "text");
    
    let text = await page.evaluate(() => document.querySelector('.input-year').value);
    await expect(text).toContain('0');

    await selector.type( "12");
    text = await page.evaluate(() => document.querySelector('.input-year').value);
    await expect(text).toContain('12');

    await page.click(".jspsych-btn");
    await page.waitForSelector('.modal.is-open');
    text = await page.evaluate(() => document.querySelector('.moda__age-incomplete').textContent);
    await expect(text).toContain('You have entered an age that falls outside the expected range.  Please enter your age.');
    await page.click(".modal__btn");

  }, timeout);