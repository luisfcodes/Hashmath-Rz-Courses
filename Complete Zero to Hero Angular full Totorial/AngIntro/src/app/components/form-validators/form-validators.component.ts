import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from 'src/app/validators/nospace.validators';

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.css']
})
export class FormValidatorsComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), noSpace.noSpaceValidations]],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  get fc(){
    return this.form.controls;
  }
}
