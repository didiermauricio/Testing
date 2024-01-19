import { expect, Locator, Page } from "@playwright/test";

export class HomePage {

  readonly page: Page
  readonly searchTextArea: Locator
 
  constructor(page: Page) {
    this.page = page;
    this.searchTextArea = page.locator('//textarea[@id=\'APjFqb\']');
  }

  async Search_Word(word: string) {
    await expect(this.searchTextArea).toBeVisible();
    await this.searchTextArea.fill(word);
  }

}