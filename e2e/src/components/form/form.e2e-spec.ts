import { FormComponent } from './form.po'

describe('---FormComponent---', () => {
  let component: FormComponent

  beforeEach(() => {
    component = new FormComponent()
  })

  it('should go to register page', () => {
    component.goToRegister()
    const title = component.getTitleComponent()
    expect<any>(title).toBe('Form')

  })
})