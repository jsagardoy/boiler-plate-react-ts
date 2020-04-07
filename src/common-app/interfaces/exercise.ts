export interface ExerciseType {
  exercise_id: number;
  trainer_id: number[];
  name: string;
  description: string;
  images?: string[];
}

export interface ExerciseSettings {
  reps: number;
  serts: number;
  done: boolean;
}
