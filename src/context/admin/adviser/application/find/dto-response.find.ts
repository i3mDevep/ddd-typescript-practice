import { AdviserEntity } from "../../domain/aggregate/adviser.aggregate";
import { FindAllAdviserResponse } from "./query-response.find";

export class PrimitiveDtoResponseFind {
  static converter(advisers: AdviserEntity[]): FindAllAdviserResponse[] {
    return advisers.map(
      (adviser) =>
        new FindAllAdviserResponse({
          ...adviser.toPrimitives(),
        })
    );
  }
}
