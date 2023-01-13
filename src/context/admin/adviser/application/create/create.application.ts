import { AdviserEntity } from "../../domain/aggregate/adviser.aggregate";
import { AdviserRepository } from "../../domain/repository/adviser.repository";

export class CreateAdviserApplication {
  constructor(private repository: AdviserRepository) {}
  async run(adviser: AdviserEntity): Promise<void> {
    await this.repository.save(adviser);
  }
}
