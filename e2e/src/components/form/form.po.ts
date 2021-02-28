import { browser, by, element } from 'protractor'

export class FormComponent {
  public goToRegister() {
    return browser.get('/register')
  }

  public getTitleComponent() {
    return element(by.css('.form h2')).getText()
  }
}