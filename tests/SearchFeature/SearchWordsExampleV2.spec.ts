
import { test, expect } from '@playwright/test';
import { HomePage} from "../page/homepage";
import { TestBase} from "../page/TestBase";



test('get started link', async ({ page }, testInfo) => {

   
    const hPage = new HomePage(page)
    const tBase = new TestBase(page)

    await tBase.GoTo();   
       
    await hPage.Search_Word('automation')

            
    await page.locator('#rso > div:nth-child(7) > div > div > div.kb0PBd.cvP2Ce.jGGQ5e > div > div > span > a').click();
    await expect(page.getByText('In 1771 Richard Arkwright')).toContainText('1771');
  
    
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    const screnshot2 = await page.getByText('In 1771 Richard Arkwright').screenshot({ path: 'screenshot.png' });
    await testInfo.attach('screnshot2', { body: screnshot2, contentType: 'image/png' });
    //close
  });