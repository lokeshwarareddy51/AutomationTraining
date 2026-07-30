import { test, expect } from '@playwright/test';

test('Verify Demo Application', async ({ page }) => {

    // Assignment - 15
    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto('https://demoqa.com/automation-practice-form');

    // 2. Wait for Page-load
    const pageLoad = page.locator("h1[class='text-center']");
    await expect(pageLoad).toBeVisible();

    // 3. Enter First name and Last name
    const firstName = page.getByPlaceholder('First Name');
    await firstName.fill('Lokeswara')
    const lastName = page.getByPlaceholder('Last Name');
    await lastName.fill('Reddy')

    // 4. Enter Email
    const email = page.getByPlaceholder('name@example.com', { exact: true });
    await email.fill('lokeshwarareddy51@gmail.com')

    // 5. Select Gender (Male)
    await getGender(page, "Male");

    // 6. Enter mobile number
    const mobileNumber = page.getByPlaceholder('Mobile Number');
    await mobileNumber.fill('9066981102');

    // 7.Select DOB (1-Feb-1991)
    await selectDateOfBirth(page, "1", "March", "1992");

    // 8.Search and Select Computer Science and English

    const selectLanguages = page.locator('#subjectsInput');

    await selectLanguages.fill('English');

    const englishOption = page.getByText('English', { exact: true });
    await expect(englishOption).toBeVisible();
    await englishOption.click();

    await selectLanguages.fill('Computer Science');

    const computerScienceOption = page.getByText('Computer Science', { exact: true });
    await expect(computerScienceOption).toBeVisible();
    await computerScienceOption.click();


    // 9.Select Hobbies as Sports and Reading
    await page.getByLabel('Sports').check();
    await page.getByLabel('Reading').check();



    // 10.Upload photo
    const uploadPhoto = page.locator("input[id='uploadPicture']");
    const filePath = "files/image.jpeg"
    await uploadPhoto.setInputFiles(filePath);

    // 11.Submit Details
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await submitButton.click();



})

async function getGender(page: any, gender: string): Promise<void> {
    const getGender = page.locator(`//label[text()="${gender}"]`)
    await getGender.click();

}

async function selectDateOfBirth(page: any, date: string, month: string, year: string): Promise<void> {

    const dobInput = page.locator('//input[@id="dateOfBirthInput"]');
    await dobInput.click();
    const dropDownMonth = page.locator('//select[contains(@class,"month-select")]');
    await dropDownMonth.click();
    await dropDownMonth.selectOption({ label: month });

    const dropDownYear = page.locator('//select[contains(@class,"year-select")]');
    await dropDownYear.click();
    await dropDownYear.selectOption({ label: year });

    const dropDownDate = page.locator(`//div[contains(@class,'react-datepicker__day')][contains(@aria-label, '${month}')][text()='${date}']`);
    await dropDownDate.click();

    const getDate = await page.locator("//input[@id='dateOfBirthInput']").inputValue();
    console.log(getDate);








}

