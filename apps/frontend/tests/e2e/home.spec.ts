import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("home page renders without crashing and displays hero title", async ({
    page,
  }) => {
    const response = await page.goto("/");
    expect(response && response.ok()).toBeTruthy();

    // Check for the presence of the hero title by aria-label
    await expect(
      page.getByRole("button", { name: "Green App Magic Button" }).first(),
    ).toBeVisible();
  });
});
