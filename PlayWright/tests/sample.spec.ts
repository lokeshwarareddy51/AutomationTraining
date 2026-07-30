import { test, expect } from '@playwright/test';

test("Test case 1", async () => {

    console.log("Test Case 1");

})

test("Test case 2", async () => {

    test.slow();

    console.log("Test    2");

})

test("Test case 3", async () => {

    console.log("Test Case 3");

})

test.describe("Login Feature", () => {


    test("Test case 4", async () => {

        console.log("Test Case 4");

    })

    test("Test case 5", async () => {

        console.log("Test Case 5");

    })

})