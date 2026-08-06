import { test } from '@playwright/test';
import { ApiCommons } from '../webcommons/apiCommons.js';
import testdata from '../testdata/data.json' with {type: 'json'};

test.describe('API Tests', () => {

    let apicommons: ApiCommons;


    test.beforeEach(async () => {
        apicommons = new ApiCommons();

        await apicommons.intializationRequest();


    })

    //Test 1 get the Repository and validate
    test('Verify Get Repo Request', async () => {
        const data = testdata.getValidRepo;
        await apicommons.getResponse(data.requestType, data.endpoint, data.payload);
        await apicommons.validateStatusCode(data.statusCode);
        await apicommons.validateStatusText(data.statusMessage);
        await apicommons.validateResponseBody("name", data.name);
        await apicommons.validateResponseHeaders("server", data.server);
        await apicommons.validateResponseSchema("name", data.namedatatype);

    })
    //Test 2 Create a New Repository
    test('Create a valid Repository', async () => {
        const data=testdata.CreateValidRepo;
        await apicommons.getResponse(data.requestType,data.endpoint,data.payload);
        await apicommons.validateStatusCode(data.statusCode);
        await apicommons.validateStatusText(data.statusMessage);
        await apicommons.validateResponseBody("name" ,data.name);
        await apicommons.validateResponseHeaders("server",data.server);
        await apicommons.validateResponseSchema("private", data.private);


    })










})

