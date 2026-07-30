import {test,expect} from '@playwright/test';

test('Verify Iframes', async ({page})=>{

// 1. Enter URL and Launch the application (https://demoqa.com/frames)

await page.goto('https://demoqa.com/frames');
// 2. Locate Main window element
const mainwindow=page.locator("#framesWrapper h1");

// Locate the frame and store in the variable
const frameLocator=page.frameLocator("iframe[id='frame1']");

// 3. Locate Frame Element
const frameElement= frameLocator.locator('h1[id="sampleHeading"]')

// 4. Copy and Print text from frame element
console.log(await frameElement.textContent());  

// 5. Copy and Print text from main window element
console.log(await mainwindow.textContent());  


})