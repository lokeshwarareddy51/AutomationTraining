import { Page } from "@playwright/test";

export class LoginPage{

        page:Page;
        username:string;
        password:string
        button:string;


        constructor(page:Page){

            this.page=page;
            this.username="#Username";
            this.password="#password"
            this.button="button"

        }

        async launchApplication(){

            await this.page.goto("URL")


        }

        async LoginPagesteps(user:string, pass:string){

            await this.page.fill(this.username, user)
             await this.page.fill(this.username, pass)
            await this.page.locator(this.button).click();



        }






}