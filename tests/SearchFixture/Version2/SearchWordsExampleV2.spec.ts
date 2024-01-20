
import { chromium, firefox, test } from '@playwright/test';
import { HomePage} from "../../page/homepage";
import { TestBase} from "../../page/TestBase";
import { SearchResultsPage} from "../../page/searchresultspage";
const browser =  chromium.launch(); 


test.beforeAll(async () => {
   
});

test.afterAll(async () => {
  (await browser).close()
});

test('get started link', async ({ page }, testInfo) => {

   
    const hPage = new HomePage(page)
    const tBase = new TestBase(page)
    const sResultsPage = new SearchResultsPage(page)

    await tBase.GoTo();          
    await hPage.Search_Word('automation')
    await sResultsPage.Open_Link_Wikipedia()
    await sResultsPage.Validate_Parragraf_Contains_Year('1771', testInfo)
    
  
    
    
    
  });