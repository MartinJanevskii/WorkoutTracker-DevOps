import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExerciseSelectorComponent } from '../exercises/exercise-selector/exercise-selector.component';



@NgModule({
  declarations: [
    WorkoutListComponent,
    WorkoutFormComponent,
    WorkoutDetailComponent,
    ExerciseSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    WorkoutListComponent,
    WorkoutFormComponent,
    WorkoutDetailComponent
  ]
})
export class WorkoutsModule { }
