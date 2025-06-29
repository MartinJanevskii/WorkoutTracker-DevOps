import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Workout } from '../../shared/models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private apiUrl = "/api/workouts";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Workout[]>{
    return this.http.get<Workout[]>(this.apiUrl);
  }

  create(workout: Workout): Observable<Workout>{
    return this.http.post<Workout>(this.apiUrl, workout);
  }

  getById(id: string): Observable<Workout>{
    return this.http.get<Workout>(`${this.apiUrl}/${id}`)
  }
}
