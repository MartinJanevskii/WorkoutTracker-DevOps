import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../workout.service';
import { Workout, Set } from '../../../shared/models/workout.model';
import { ExerciseService } from '../../exercises/exercise.service';
import { Exercise } from '../../../shared/models/exercise.model';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent implements OnInit {
  workout!: Workout;
  exercisesMap: { [id: string]: Exercise } = {};
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService,
    private exerciseService: ExerciseService
  ) {}

  ngOnInit(): void {
    const workoutId = this.route.snapshot.paramMap.get('id');
    if (!workoutId) return;

    this.exerciseService.getAll().subscribe(exercises => {
      this.exercisesMap = Object.fromEntries(
        exercises.map(e => [e.id!, e])
      );

      this.workoutService.getById(workoutId).subscribe(data => {
        this.workout = data;
        console.log(data)
        this.loading = false;
      });
    });
  }

  getExerciseName(id: string): string {
    return this.exercisesMap[id]?.name || 'Unknown';
  }
}
