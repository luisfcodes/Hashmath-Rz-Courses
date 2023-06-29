import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NoSpace {

  static noSpaceValidations(control: AbstractControl): ValidationErrors | null {
    let controlValue = control.value as string;

    if (controlValue.indexOf(" ") >= 0) {
      return { noSpaceValidator: true };
    } else {
      return null;
    }
  }
}
