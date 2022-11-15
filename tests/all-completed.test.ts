import { test } from "@playwright/test";

test("ff", async ({ page }) => {
  await page.locator("non-existing-locator").click();
});
