export interface Set {
  id?: string;
  reps: number;
  weight: number;
  rpe: number;
  restDuration: number;
  setNumber: number;
  exerciseId: string;
}

export interface Workout {
  id?: string;
  name: string;
  date: string;
  sets: Set[];
}
