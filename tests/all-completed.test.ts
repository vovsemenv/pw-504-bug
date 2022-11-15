import { test } from "@playwright/test";

test("ff", async ({ page }, testInfo) => {
  await testInfo.attach("basic-page-screen", {
    body: await page.screenshot(),
    contentType: "image/png",
  });
  await page.locator("non-existing-locator").click();
});
