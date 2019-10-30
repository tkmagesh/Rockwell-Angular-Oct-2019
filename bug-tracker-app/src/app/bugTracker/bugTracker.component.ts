import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugsList : Bug[] = [];
    bugSortBy : string = 'name';
    bugSortDesc : boolean = false;
    newBugName : string = '';
    /* 
    bugOperationsService : BugOperationsService;

    constructor(bugOperationService : BugOperationsService){
        this.bugOperationsService = bugOperationService;
    } 
    */

    constructor(private bugOperationsService: BugOperationsService) {
        this.bugsList.push({name : 'Server communication failure', isClosed : true});
        this.bugsList.push({ name: 'Data integrity checks failed', isClosed: false });
        this.bugsList.push({ name: 'User actions not recognized', isClosed: false });
        this.bugsList.push({ name: 'Application not responding', isClosed: true });
    }
    
    onAddNewClick(){
        let newBug = this.bugOperationsService.createNew(this.newBugName);
        this.bugsList = [...this.bugsList, newBug];
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