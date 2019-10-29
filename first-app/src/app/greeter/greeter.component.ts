import { Component } from '@angular/core';

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html',
    styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
    greetMessage = 'A dummy message';
}