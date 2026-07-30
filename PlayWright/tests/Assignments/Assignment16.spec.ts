import { test, expect } from '@playwright/test';

test('Verify Alerts', async ({ page }) => {

    //Assignment 16

    // 1. Enter URL and Launch the application (https://demoqa.com/alerts)

    await page.goto('https://demoqa.com/alerts');

    // 2. Locate Alert buttons to trigger the alerts

    const alertButton = page.locator("button[id='alertButton']");
    const confirmButton = page.locator("button[id='confirmButton']");
    const promtButton = page.locator("button[id='promtButton']");
    const timerAlertButton = page.locator("button[id='timerAlertButton']");

    // 3. Click on the information alert and copy the alert message and then select OK button

    page.once('dialog', async dialog => {

        const textmessage = dialog.message();
        console.log(textmessage);
        await dialog.accept();

    })
    await alertButton.click();

    // 7. Click on the timer Confirmation alert, copy the alert message, and select the OK button.
    const [timerDialog] = await Promise.all([
        page.waitForEvent('dialog'),
        timerAlertButton.click()
    ]);

    const textmessage = timerDialog.message();
    console.log(textmessage);
    await timerDialog.accept();


    // 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.

    page.once('dialog', async dialog => {

        const textmessage = dialog.message();
        console.log(textmessage);
        await dialog.dismiss();

    })
    await confirmButton.click();
    const getCancelConfirmation = page.locator("span[id='confirmResult']");
    const text = await getCancelConfirmation.textContent();
    console.log(text);
    // 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.

    page.once('dialog', async dialog => {

        const textmessage = dialog.message();
        console.log(textmessage);
        await dialog.accept('Loki it a dailog box');

    })
    await promtButton.click();


})