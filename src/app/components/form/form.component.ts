import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup
  
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  send() {

  }

}
