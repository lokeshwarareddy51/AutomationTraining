import { test, expect } from '@playwright/test'



test.beforeAll(async () => {
    console.log("Before All");
});

test.afterAll(async () => {
    console.log("After All");
});

test.beforeEach(async ({ page }) => {
    console.log("Before Each");

});

test.afterEach(async ({ page }) => {
    console.log("After Each");
});



test.describe("Group 1", () => {



    test("Test case 1", { tag: "@smoke" }, async () => {

        console.log("Test Case 1");

    })

    test("Test case 2", { tag: "@sanity" }, async () => {

        console.log("Test Case 2");

    })

})

test.describe("Group 2", () => {


    test("Test case 4", { tag: "@Regression" }, async () => {

        console.log("Test Case 4");

    })

    test("Test case 5", { tag: ["@sanity", "@smoke"] }, async () => {

        console.log("Test Case 5");

    })

})