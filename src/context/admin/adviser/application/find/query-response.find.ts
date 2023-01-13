import { AdviserTypePrimitives } from "../../domain/aggregate/adviser.aggregate";

export class FindAllAdviserResponse {
  readonly uuid: string;
  readonly name: string;

  constructor(params: AdviserTypePrimitives) {
    Object.assign(this, params);
  }
}
