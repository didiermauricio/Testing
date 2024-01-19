
import { test, expect } from '@playwright/test';
test('get started link', async ({ page }, testInfo) => {
    await page.goto('https://google.es/');
    
     if (await page.getByRole('button', { name: 'Aceptar todo' }).isVisible()){
          await page.getByRole('button', { name: 'Aceptar todo' }).click();
     }
    await expect(page).toHaveTitle(/Google/);
    await page.getByLabel('Buscar', { exact: true }).fill('Automation')
    await page.getByRole('button', { name: 'Buscar con Google' }).click();
    await page.getByRole('link', { name: 'Automation (videojuego) -' }).click();
    await expect(page.getByText('El 25 de mayo de 2017, la')).toContainText('2017');
  
    
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    const screnshot2 = await page.getByText('El 25 de mayo de 2017, la').screenshot({ path: 'screenshot.png' });
    await testInfo.attach('screnshot2', { body: screnshot2, contentType: 'image/png' });
    //close
  });