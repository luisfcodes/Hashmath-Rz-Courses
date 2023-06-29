import { Component } from '@angular/core';
import { NgForm, NgModel, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),

    contactDetails: new FormGroup({
      address: new FormControl('', [Validators.required, Validators.minLength(3)]),
      shippingAddress: new FormControl('', Validators.required),
      contactNo: new FormControl('', Validators.required),
    }),

    skills: new FormArray([])
  })

  get fullName(): any{
    return this.form.get('fullName');
  }

  get email(): any{
    return this.form.get('email');
  }

  get address(): any{
    return this.form.get('contactDetails.address');
  }

  get shippingAddress(): any{
    return this.form.get('contactDetails.shippingAddress');
  }

  get contactNo(): any{
    return this.form.get('contactDetails.contactNo');
  }

  get skills(): any{
    return this.form.get('skills') as FormArray;
  }

  addSkills(skill: HTMLInputElement){
    this.skills.push(new FormControl(skill.value));
    skill.value = '';
  }

  removeSkill(skill: FormControl){
    let index = this.skills.controls.indexOf(skill);
    this.skills.removeAt(index);
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
