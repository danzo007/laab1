import { AbstractControl, ValidatorFn } from "@angular/forms";

export function isValidAirline(value: string): boolean {
    const airlinePattern = /^[A-Za-z\s]+$/;
    if (value && airlinePattern.test(value)) {
        return true;
    }
    return false;
}

export function airlineValidator(): ValidatorFn{
    return(control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let valid = !control.value || isValidAirline(control.value);
        return valid ? null : { airline: true };
    }
}