import { AdviserRepository } from "../../domain/repository/adviser.repository";
import { PrimitiveDtoResponseFind } from "./dto-response.find";

export class FindAllAdviserApplication {
  constructor(private repository: AdviserRepository) {}

  async run() {
    const advisers = await this.repository.findAll();
    return PrimitiveDtoResponseFind.converter(advisers);
  }
}
