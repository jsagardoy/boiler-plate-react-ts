export interface ExerciseType {
  exercise_id: number;
  trainer_id: number[];
  name: string;
  description: string;
  images?: string;
}

export interface ExerciseSettings {
  exercise_id: number;
  reps: number;
  sets: number;
  done: boolean;
}
