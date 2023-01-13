import { AdviserEntity } from "../domain/aggregate/adviser.aggregate";
import { AdviserRepository } from "../domain/repository/adviser.repository";
import { mockAdviserSeed } from "./database-mock";

export class AdviserPersistenceInfrastructure implements AdviserRepository {
  private mockData = mockAdviserSeed;
  save(adviser: AdviserEntity): Promise<void> {
    this.mockData.push(adviser.toPrimitives());
    return Promise.resolve();
  }
  findAll(): Promise<AdviserEntity[]> {
    //     const advisers: AdviserEntity[] = this
    //   .mockData as unknown as AdviserEntity[];
    const advisers = this.mockData.map(AdviserEntity.fromPrimitives);
    return Promise.resolve(advisers);
  }
}
