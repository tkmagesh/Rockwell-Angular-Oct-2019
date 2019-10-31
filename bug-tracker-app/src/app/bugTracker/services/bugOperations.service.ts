import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugOperationsService{
    constructor(private bugStorage : BugStorageService){

    }
    getAll() : Bug[] {
        return this.bugStorage.getAll();
    }
    createNew(newBugName : string):Bug{
        let newBugData: Bug = {
            id : 0,
            name: newBugName,
            isClosed: false,
            createdAt : new Date()
        };
        return this.bugStorage.save(newBugData);
    }

    toggle(bugToToggle : Bug):Bug{
        let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugStorage.save(toggledBug);
    }
    remove(bug : Bug) : void {
        this.bugStorage.remove(bug);
    }
}