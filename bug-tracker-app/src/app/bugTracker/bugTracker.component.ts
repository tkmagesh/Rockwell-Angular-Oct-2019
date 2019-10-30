import { Component } from '@angular/core';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugsList : string[] = [];

    onAddNewClick(newBugName : string){
        this.bugsList.push(newBugName);
    }
    
}