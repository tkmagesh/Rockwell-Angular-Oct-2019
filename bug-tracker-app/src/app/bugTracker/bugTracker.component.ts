import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugsList : Bug[] = [];

    onAddNewClick(newBugName : string){
        let newBug : Bug = {
            name : newBugName,
            isClosed : false
        };
        this.bugsList.push(newBug);
    }

    onBugNameClick(bug : Bug){
        bug.isClosed = !bug.isClosed;
    }

    onRemoveClosedClick(){
        this.bugsList = this.bugsList.filter(bug => !bug.isClosed);
    }

    getClosedCount(){
        return this.bugsList.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
    
}