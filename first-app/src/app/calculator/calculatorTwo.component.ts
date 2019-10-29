import { Component } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
    selector : 'app-calculator-2',
    templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{
    operator : string = 'add';
    model : CalculatorModel = new CalculatorModel();

    onCalculateClick(){
        switch (this.operator) {
            case 'add':
                this.model.add();
                break;
            case 'subtract':
                this.model.subtract();
                break;
            case 'multiply':
                this.model.multiply();
                break;
            case 'divide':
                this.model.divide();
                break;
        
            default:
                break;
        }
    }
}