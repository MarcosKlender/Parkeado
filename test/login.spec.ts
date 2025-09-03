import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("should have the correct metadata and elements", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Inicio de sesión" })
    ).toBeVisible();
    await expect(page.getByLabel("Correo")).toBeVisible();
    await expect(page.getByLabel("Contraseña")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Olvidé mi contraseña" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Ingresar" })).toBeVisible();
  });

  test("should redirect to register page on click", async ({ page }) => {
    await page.getByRole("link", { name: "Regístrate" }).click();
    await expect(page).toHaveURL("http://localhost:5173/register");
    await expect(page.getByRole("heading", { name: "Registro" })).toBeVisible();
  });
});
