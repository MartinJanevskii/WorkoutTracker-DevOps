import { Component } from '@angular/core';
import { Workout } from 'src/app/shared/models/workout.model';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent {
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService){}

  ngOnInit(): void{
    this.workoutService.getAll().subscribe(data => {this.workouts = data});
  }
}
