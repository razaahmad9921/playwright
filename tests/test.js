const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://intelmarketspresale.com/');
  await page.getByRole('button', { name: 'User Icon Sign Up' }).click();
  await page.getByRole('button', { name: 'Arrow Login' }).click();
  await page.getByPlaceholder('Enter Your Email').click();
  await page.getByPlaceholder('Enter Your Email').fill('g@gmail.com');
  await page.getByPlaceholder('Enter Your Email').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('12345');
  await page.getByText('Remember me').click();
  await page.getByRole('button', { name: 'Login Arrow' }).click();
  await page.getByRole('button', { name: 'Icon Profile Icon Profile' }).click();
  await page.getByPlaceholder('Enter Your number').fill('1993-10-30');
  await page.locator('.css-19bb58m').click();
  await page.locator('#react-select-2-input').fill('pakistan');
  await page.getByRole('option', { name: 'Pakistan' }).click();
  await page.locator('.css-19bb58m').click();
  await page.locator('.css-19bb58m').dblclick();
  await page.locator('#react-select-2-input').press('ArrowRight');
  await page.locator('#react-select-2-input').press('ArrowRight');
  await page.locator('#react-select-2-input').press('ArrowRight');
  await page.locator('#react-select-2-input').press('ArrowRight');
  await page.locator('#react-select-2-input').press('ArrowRight');
  await page.locator('#react-select-2-input').press('ArrowDown');
  await page.locator('#react-select-2-input').press('ArrowDown');
  await page.locator('#react-select-2-input').press('ArrowDown');
  await page.locator('#react-select-2-input').fill('united');
  await page.getByRole('option', { name: 'United States', exact: true }).click();
  await page.getByRole('link', { name: 'Update profile' }).click();
  await page.getByRole('tab', { name: 'My Settings My Settings' }).click();
  await page.locator('div').filter({ hasText: /^Alert me by email in case of unusual activity in my account$/ }).locator('#default-checkbox').check();
  await page.getByRole('link', { name: 'Update settings' }).click();
  await page.getByRole('button', { name: 'Icon transaction Icon' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();