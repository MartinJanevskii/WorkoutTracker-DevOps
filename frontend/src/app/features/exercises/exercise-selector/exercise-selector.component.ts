import { Component, Input, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../../../shared/models/exercise.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-selector',
  templateUrl: './exercise-selector.component.html',
  styleUrls: ['./exercise-selector.component.scss']
})
export class ExerciseSelectorComponent implements OnInit {
  @Input() formControl!: FormControl;
  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exerciseService.getAll().subscribe(data => {
      console.log(data)
      this.exercises = data;
    });
  }
}
