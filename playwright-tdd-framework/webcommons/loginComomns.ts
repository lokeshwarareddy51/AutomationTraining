import {Page} from '@playwright/test';


export class CommonMethods{


     page:Page;

    constructor(page:Page){

       this.page=page;



    }

    async Click(){

        await this.page.locator("").click()




    }







}
