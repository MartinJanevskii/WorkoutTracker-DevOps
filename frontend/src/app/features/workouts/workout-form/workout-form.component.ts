import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';
import { Workout } from '../../../shared/models/workout.model';
import { AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnInit {
  workoutForm!: FormGroup;

  
  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.workoutForm = this.fb.group({
      name: ['', Validators.required],
      date: [new Date().toISOString()],
      sets: this.fb.array([])
    });
  }

  get sets(): FormArray {
    return this.workoutForm.get('sets') as FormArray;
  }

  addSet() {
    const setGroup = this.fb.group({
      reps: [0, Validators.required],
      weight: [0, Validators.required],
      rpe: [0],
      restDuration: [0],
      setNumber: [this.sets.length + 1],
      exerciseId: ['', Validators.required]
    });
    this.sets.push(setGroup);
  }

  removeSet(index: number) {
    this.sets.removeAt(index);
  }

  getExerciseControl(set: AbstractControl): FormControl {
    return set.get('exerciseId') as FormControl;
  }

  submit() {
    if (this.workoutForm.invalid) return;

    const workout: Workout = this.workoutForm.value;
    this.workoutService.create(workout).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
