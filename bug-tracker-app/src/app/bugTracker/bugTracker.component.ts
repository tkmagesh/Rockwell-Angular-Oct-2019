import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { forkJoin, Observable } from 'rxjs';

/* @Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
    bugsList : Bug[] = [];
    bugSortBy : string = 'name';
    bugSortDesc : boolean = false;
    
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

} */

@Component({
    selector: 'app-bug-tracker',
    templateUrl: 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit {
    bugsList: Bug[] = [];
    bugSortBy: string = 'name';
    bugSortDesc: boolean = false;

    ngOnInit() {
        this.loadBugs();
    }

    private loadBugs(){
        this.bugOperationsService
            .getAll()
            .subscribe(bugs => this.bugsList = bugs);
    }

    constructor(private bugOperationsService: BugOperationsService) {

    }

    onNewBugAdded(newBug: Bug) {
        this.bugsList = [...this.bugsList, newBug];
    }

    onBugNameClick(bugToToggle: Bug) {
        this.bugOperationsService
            .toggle(bugToToggle)
            .subscribe(toggledBug => this.bugsList = this.bugsList.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
        
    }

    onRemoveClosedClick() {
        let removeClosedBugsObservable = this.bugsList
            .filter(bug => bug.isClosed)
            .map(closedBug => this.bugOperationsService.remove(closedBug));

        forkJoin(removeClosedBugsObservable)
            .subscribe(() => this.loadBugs());

    }

}