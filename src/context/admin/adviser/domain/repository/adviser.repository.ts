import { AdviserEntity } from "../aggregate/adviser.aggregate";

export interface AdviserRepository {
  save(adviser: AdviserEntity): Promise<void>;
  findAll(): Promise<AdviserEntity[]>;
}
