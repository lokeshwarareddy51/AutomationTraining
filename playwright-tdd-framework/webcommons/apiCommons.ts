import { test, expect, request } from '@playwright/test';
import { APIRequestContext, APIResponse } from '@playwright/test';
import config from '../config/config.json' with {type: 'json'};



export class ApiCommons {

    private requestContext: any;
    private response: any;

    


    async intializationRequest() {

        this.requestContext = await request.newContext({
            "baseURL": config.BASE_URL,
            "extraHTTPHeaders": {
                "accept": "application/vnd.github+json",
             
            },
            //  timeout:30000

        })


    }

    async getResponse(requestType: string, endpoint: string, payload?: any) {

        switch (requestType.toLowerCase()) {

            case "get":
                this.response = await this.requestContext.get(endpoint);

                break;
            case "post":
                this.response = await this.requestContext.post(endpoint, { data: payload });
                // console.log("Response Object:", await this.response.json());
                break;

        }
        //  await new Promise(resolve => setTimeout(resolve,2000));
        return this.response;

    }

    async validateStatusCode(expValue: number) {

        const actualValue = await this.response.status();
        // console.log(actualValue);
        expect(actualValue).toBe(expValue);

    }

    async validateStatusText(expValue: string) {
        const actualValue = await this.response.statusText();
        expect(actualValue).toBe(expValue);

    }

    async validateResponseBody(key: string, expValue: any) {
        const responseBody = await this.response.json();
        const actualValue = responseBody[key];
        expect(actualValue).toBe(expValue);

    }
    async validateResponseHeaders(headerName: string, expValue: any) {
        const responseHeader = await this.response.headers();
        const actualValue = responseHeader[headerName];
        expect(actualValue).toBe(expValue);

    }
    async validateResponseSchema(key: string, expDataType: any) {
        const responseBody = await this.response.json();
        const actualValue = responseBody[key];
        const actualDataType = typeof (actualValue)
        expect(actualDataType).toBe(expDataType);

    }














}
