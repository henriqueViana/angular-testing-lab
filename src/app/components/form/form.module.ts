import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormComponent } from './form.component'

@NgModule({
  imports: [
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})

export class FormModule {}