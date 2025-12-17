import { expect, test } from '@playwright/test';

test.describe('Projects functionality', () => {
  test('user can view featured projects and navigate to all projects page', async ({ page }) => {
    await page.goto('/');

    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();

    const featuredProjectCards = projectsSection.locator('.rounded-lg.border.bg-card');
    const featuredCount = await featuredProjectCards.count();
    expect(featuredCount).toBe(4);

    const viewAllButton = projectsSection.locator('a[href="/projects"]');
    await expect(viewAllButton).toBeVisible();
    await expect(viewAllButton).toContainText('View All Projects');

    await viewAllButton.click();

    await expect(page).toHaveURL('/projects');

    await expect(page.locator('h1')).toContainText('Featured Projects');

    const allProjectCards = page.locator('.rounded-lg.border.bg-card');
    const totalCount = await allProjectCards.count();
    expect(totalCount).toBe(6);

    const firstProject = allProjectCards.first();
    await expect(firstProject.locator('h3').first()).toBeVisible();
    await expect(firstProject.locator('p').first()).toBeVisible();

    const backButton = page.locator('a:has-text("Back to Home")');
    await expect(backButton).toBeVisible();
    await backButton.click();

    await expect(page).toHaveURL('/');

    await expect(projectsSection).toBeVisible();
    const featuredProjectCardsAfterReturn = projectsSection.locator('.rounded-lg.border.bg-card');
    const featuredCountAfterReturn = await featuredProjectCardsAfterReturn.count();
    expect(featuredCountAfterReturn).toBe(4);
  });

  test('all projects page displays detailed information', async ({ page }) => {
    await page.goto('/projects');

    const projectCards = page.locator('.rounded-lg.border.bg-card');
    const firstProject = projectCards.first();

    await expect(firstProject.locator('h3').first()).toBeVisible();
    await expect(firstProject.locator('img')).toBeVisible();

    const statusBadge = firstProject.locator(
      'span:has-text("completed"), span:has-text("in-progress"), span:has-text("archived")'
    );
    await expect(statusBadge).toBeVisible();

    const startedText = firstProject.locator('text=/Started:/');
    await expect(startedText).toBeVisible();

    const technologiesHeading = firstProject.locator('h3:has-text("Technologies")');
    await expect(technologiesHeading).toBeVisible();
  });

  test('projects are sorted with featured first', async ({ page }) => {
    await page.goto('/projects');

    const projectCards = page.locator('.rounded-lg.border.bg-card');
    const firstProjectTitle = await projectCards.first().locator('h3').first().textContent();
    const lastProjectTitle = await projectCards.last().locator('h3').first().textContent();

    expect([
      'TS3Viewer',
      'Tennis league management app',
      'RESTful Wedos API wrapper',
      'Airsoft Team Website',
    ]).toContain(firstProjectTitle?.trim());
    expect(['Portfolio Website', 'Toggl TimeGuru']).toContain(lastProjectTitle?.trim());
  });
});
