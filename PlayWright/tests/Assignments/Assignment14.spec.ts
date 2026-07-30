import { test, expect } from '@playwright/test';

test('Verify Application Login', async ({ page }) => {

    //1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    // 2.verify application logo is displayed
    const parabankLogo = page.getByAltText('ParaBank', { exact: true });
    await expect(parabankLogo).toBeVisible();

    // 3.Verify application caption displayed as "Experience the difference"
    const actualCaption = await page.locator('.caption').textContent();
    const expectedCaption = "Experience the difference";
    expect(actualCaption).toBe(expectedCaption);

    // 4.Enter invalid username
    const username = page.locator('input[name="username"]');
    await username.fill('');

    // 5.Enter empty Password
    const Password = page.locator('input[name="password"]')
    await Password.fill('');

    // 6.Click on login button
    const login = page.getByRole('button', { name: 'Log In' });
    await login.click();

    //7.Verify the error message "Please enter a username and password."
    const isError = page.locator('div[id="rightPanel"] > h1[class="title"]');
    await expect(isError).toBeVisible();
    const loginError = page.locator('p[class="error"]');
    const actualErrorMessage = await loginError.textContent();
    const expectedError = "Please enter a username and password.";
    expect(actualErrorMessage).toBe(expectedError);

    //8.Click on admin page link
    const adminLink = page.getByRole('link', { name: 'Admin Page', exact: true });
    await adminLink.click();

    // 9.select the option "soap" from dba mode radio button
    const selectradiobutton = page.locator('input[value="soap"]');
    await selectradiobutton.click()

    // 10.Scroll to element dropdown
    const dropdown = page.locator('select[id="loanProvider"]');
    await dropdown.scrollIntoViewIfNeeded();

    // 11.Select the option local from the dropdown
    await dropdown.selectOption({ value: 'local' });

    // 12.click on submit button
    const adminSubmit = page.getByRole('button', { name: 'Submit' });
    await adminSubmit.click();

    // 13.verify submission is successful by validating success message
    const actualSuccessMessage = await page.locator('//b[contains(text(), "Settings saved")]').textContent();
    const expectedSuccessMessage = "Settings saved successfully."
    expect(actualSuccessMessage).toBe(expectedSuccessMessage);

    // 14.Click on services page link
    const services = page.getByRole('link', { name: 'Services', exact: true }).nth(0);
    await services.click();

    // 15.wait for service page
    const servicepage = page.locator('//span[contains(text(), "Available Bookstore SOAP services")]')
    await servicepage.waitFor();

    // 16.Scroll down till bookstore services table
    const bookstoreServices = page.locator("//span[@class='heading' and contains(text(), 'Bookstore services:')]/following-sibling::table[1]//tbody")
    await bookstoreServices.scrollIntoViewIfNeeded();

    // 17.get total rows of books store services table
    const rows = page.locator('//span[@class="heading" and contains(text(), "Bookstore services:")]/following-sibling::table[1]//tbody//tr');
    const totalrows = await rows.count();
    console.log(totalrows);

    // 18.get total columns of books store services table
    const cells = page.locator('//span[@class="heading" and contains(text(), "Bookstore services:")]/following-sibling::table[1]//tbody//tr[1]//td');
    const totalcells = await cells.count();
    console.log(totalcells);

    // 19.Print table data(row wise and column wise data)

    for (let i = 1; i <= totalrows; i++) {

        for (let j = 1; j <= totalcells; j++) {

            const data= page.locator(`//span[@class="heading" and contains(text(), "Bookstore services:")]/following-sibling::table[1]//tbody//tr[${i}]//td[${j}]`);
         
            const getData=await data.textContent();

            console.log(`Rows ${i} - Cells ${j} - ${getData}`);


        }


    }












})