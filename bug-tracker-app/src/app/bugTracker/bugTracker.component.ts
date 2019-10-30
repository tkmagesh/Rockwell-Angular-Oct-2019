import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugsList : Bug[] = [];

    /* 
    bugOperationsService : BugOperationsService;

    constructor(bugOperationService : BugOperationsService){
        this.bugOperationsService = bugOperationService;
    } 
    */

    constructor(private bugOperationsService: BugOperationsService) {
        
    }
    
    onAddNewClick(newBugName : string){
        let newBug = this.bugOperationsService.createNew(newBugName);
        this.bugsList.push(newBug);
    }

    onBugNameClick(bug : Bug){
        this.bugOperationsService.toggle(bug);
    }

    onRemoveClosedClick(){
        this.bugsList = this.bugsList.filter(bug => !bug.isClosed);
    }

    getClosedCount(){
        return this.bugsList.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
    
}