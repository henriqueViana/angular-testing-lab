import { NgModule } from '@angular/core'
import { RegisterComponent } from './register.component'
import { FormModule } from '../../components/form/form.module'

@NgModule({
  imports: [
    FormModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})

export class RegisterModule {}