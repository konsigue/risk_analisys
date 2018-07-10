import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { ValidadorRFC } from '../register/registro-moral/validadorRFC';

@Directive({
  selector: '[appRfcValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: RfcValidatorDirective, multi: true }
  ]
})

export class RfcValidatorDirective implements Validator {

  validator: ValidatorFn;

  constructor() {
    console.log('Existe la directiva');
    this.validator = this.RFCValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  // validate(control: AbstractControl): { [key: string]: any } | null {
  //   return this.RFC ? ValidadorRFC(this.RFC)
  //     : null;
  // }

  RFCValidator(): ValidatorFn {
    return (c: FormControl) => {
      const isValid = ValidadorRFC(c.value);
      if (isValid) {
        return null;
      } else {
        return {
          RFCvalidator: {
            valid: false
          }
        };
      }
    };
  }
}
