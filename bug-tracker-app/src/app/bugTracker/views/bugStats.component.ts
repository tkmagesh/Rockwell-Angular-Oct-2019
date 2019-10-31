import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Bug } from '../models/Bug';

@Component({
    selector : 'app-bug-stats',
    template : `
        <h3>{{getDate()}}</h3>
        <section class="stats">
            <span class="closed">{{bugs | closedCount}}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
    `,
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{
    @Input()
    bugs : Bug[] = [];

    getDate(){
        return new Date();
    }
}