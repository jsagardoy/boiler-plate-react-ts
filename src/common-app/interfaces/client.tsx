import { ExerciseType, ExerciseSettings } from './exercise';
import { PersonType } from './person';

export interface ClientType {
  client_id: number;
  trainer_id: number;
  person_info: PersonType;
  weight: number;
  height: number;
  exercisesList: ListType[];
}

type ListType = ExerciseId & ExerciseSettings;

interface ExerciseId {
  exercise_id: number;
}

