import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutListComponent } from './features/workouts/workout-list/workout-list.component';
import { WorkoutFormComponent } from './features/workouts/workout-form/workout-form.component';
import { WorkoutDetailComponent } from './features/workouts/workout-detail/workout-detail.component';

const routes: Routes = [
  { path: '', component: WorkoutListComponent },
  { path: 'new-workout', component: WorkoutFormComponent },
  { path: 'workout/:id', component: WorkoutDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
