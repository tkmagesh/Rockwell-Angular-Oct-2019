import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

@NgModule({
  declarations: [
    AppComponent
    ,BugTrackerComponent
    ,ClosedCountPipe
    ,TrimTextPipe
    ,SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ BugOperationsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
