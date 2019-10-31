import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
    bugsList : Bug[] = [];
    bugSortBy : string = 'name';
    bugSortDesc : boolean = false;
    
    /* 
    bugOperationsService : BugOperationsService;

    constructor(bugOperationService : BugOperationsService){
        this.bugOperationsService = bugOperationService;
    } 
    */

    ngOnInit(){
        this.bugsList = this.bugOperationsService.getAll();
    }
    
    constructor(private bugOperationsService: BugOperationsService) {
        
    }
    
    onNewBugAdded(newBug : Bug){
        this.bugsList = [...this.bugsList, newBug];
    }

    onBugNameClick(bugToToggle : Bug){
        let toggledBug = this.bugOperationsService.toggle(bugToToggle);
        this.bugsList = this.bugsList.map(bug => bug === bugToToggle ? toggledBug : bug);
    }

    onRemoveClosedClick(){
        this.bugsList = this.bugsList.filter(bug => !bug.isClosed);
    }

}