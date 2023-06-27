import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  onSubmit(f: NgForm){
    console.log(f.value);
    alert('Formulario enviado');
  }

  getValue(value: NgModel){
    console.log(value);
  }
}
