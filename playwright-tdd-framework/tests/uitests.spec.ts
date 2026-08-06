import {expect, test} from '@playwright/test'
import { LoginPage } from '../page/page-steps/loginpage.js'


test('Login the application',{tag:'@smoke'}, async ({page})=>{

  const login=new LoginPage(page);

    await login.launchApplication();
    await login.LoginPagesteps("loki", "pass");
    expect(page).toHaveURL('//url');







})
