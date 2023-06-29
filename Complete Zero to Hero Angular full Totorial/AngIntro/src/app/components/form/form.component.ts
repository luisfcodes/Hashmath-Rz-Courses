import { Component } from '@angular/core';
import { NgForm, NgModel, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  get fullName(): any{
    return this.form.get('fullName');
  }

  get email(): any{
    return this.form.get('email');
  }

  get address(): any{
    return this.form.get('address');
  }

  onSubmitReactiveForm(){
    console.log(this.form.value);
    alert('Formulario enviado');
  }

  onSubmit(f: NgForm){
    console.log(f.value);
    alert('Formulario enviado');
  }

  getValue(value: NgModel){
    console.log(value);
  }
}