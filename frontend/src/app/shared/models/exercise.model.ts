export enum MuscleGroup {
  CHEST = 'CHEST',
  SHOULDERS = 'SHOULDERS',
  BACK = 'BACK',
  BICEPS = 'BICEPS',
  TRICEPS = 'TRICEPS',
  LEGS = 'LEGS'
}

export interface Exercise {
  id?: string;
  name: string;
  muscleGroupList: MuscleGroup[];
}
