// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Home page', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Gemini Intranet');
  });

  test('displays the main heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Gemini Intranet', exact: true })).toBeVisible();
  });

  test('shows the welcome section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Welcome to Gemini Intranet' })).toBeVisible();
  });

  test('shows system online status badge', async ({ page }) => {
    await page.goto('/');
    const badge = page.getByTestId('status-badge');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveText('System Online');
  });
});

test.describe('Health API', () => {
  test('returns ok status', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.status).toBe('ok');
    expect(body.service).toBe('gemini-intranet');
  });
});
