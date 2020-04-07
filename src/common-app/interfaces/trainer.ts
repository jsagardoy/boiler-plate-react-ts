import { PersonType } from "./person";

export interface TrainerType {
  trainer_id: number;
  trainer_info: PersonType;
  clientList?: number[];
  exerciseList?: number[];
}
