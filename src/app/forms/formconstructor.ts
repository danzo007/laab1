import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { travelType } from "../class/Travel/TravelType";
import { airlineValidator } from "../add-product/validators/airlineValidator";
export function formConstructor(
    type: string,
    productForm: FormGroup,
    fb: FormBuilder
){
    const controlsToRemove = [
        'stars',
        'breakfast',
        'numberOfTravels',
        'airline',
        'flightNumber'
    ];
    controlsToRemove.forEach((control) => {
        if (productForm.contains(control)) {
            productForm.removeControl(control);
        }
    });
   
    if (type == travelType[1] || type == travelType[2]) {
        productForm.addControl('stars', fb.control(1 , [Validators.required, Validators.min(0), Validators.max(5)]));
        productForm.addControl('breakfast', fb.control(false, [Validators.required, Validators.pattern('true|false')]));
        if (type == travelType[2]) {
            productForm.addControl('numberOfTravels', fb.control(2, [Validators.required, Validators.min(1)]));
        }
        productForm.addControl('airline', fb.control('aa', [airlineValidator]));
        productForm.addControl('flightNumber', fb.control('2', [Validators.min(0)]));
    } else if (type == travelType[0]) { 
        console.log(type);
        productForm.addControl('airline', fb.control('aa', [Validators.required, airlineValidator]));
        productForm.addControl('flightNumber', fb.control('2', [Validators.required, Validators.min(0)]));
    }
}