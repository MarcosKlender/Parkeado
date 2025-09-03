import { test, expect } from "@playwright/test";

test.describe("Register Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/register");
  });

  test("should have the correct metadata and elements", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Registro" })).toBeVisible();
    await expect(page.getByLabel("Nombre y Apellido")).toBeVisible();
    await expect(page.getByLabel("Correo")).toBeVisible();
    await expect(page.getByLabel("Placa del Vehículo")).toBeVisible();
    await expect(page.getByLabel("Contraseña", { exact: true })).toBeVisible();
    await expect(
      page.getByLabel("Confirmar Contraseña", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Registrarse" })
    ).toBeVisible();
  });

  test("should redirect to login page on click", async ({ page }) => {
    await page.getByRole("link", { name: "Inicia sesión" }).click();
    await expect(page).toHaveURL("http://localhost:5173/");
    await expect(
      page.getByRole("heading", { name: "Inicio de sesión" })
    ).toBeVisible();
  });
});
