import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreDataModule } from '@bb/core-data';
import { StoreModule } from '@ngrx/store';
import { reducers } from './index';
import { ProjectsEffect } from './projects-ngrx/projects.effects';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ProjectsEffect
    ]),
    StoreDevtoolsModule.instrument({name: 'NGRX Sample Store'})
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
