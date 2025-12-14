import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Dominik Zarsky/);
  });

  test('all main sections are present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#skills"]');
    await expect(page.locator('#skills')).toBeInViewport();
  });

  test('social links are present', async ({ page }) => {
    await page.goto('/');
    const githubLink = page.locator('a[href*="github"]').first();
    const linkedinLink = page.locator('a[href*="linkedin"]').first();
    await expect(githubLink).toBeVisible();
    await expect(linkedinLink).toBeVisible();
  });
});
