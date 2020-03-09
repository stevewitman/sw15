import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreDataModule } from '@nx15/core-data';
import { CoreStateModule } from '@nx15/core-state';
import { MaterialModule } from '@nx15/material';
import { UiToolbarModule } from '@nx15/ui-toolbar';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiToolbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
