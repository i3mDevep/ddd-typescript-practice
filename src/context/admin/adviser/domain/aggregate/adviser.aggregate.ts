import { AggregateRoot } from "../../../../shared/domain/aggregate/root.aggregate";
import { NameAdviser } from "../vo/name.vo";
import { UuidAdviser } from "../vo/uuid.vo";

export interface AdviserTypePrimitives {
  name: string;
  uuid: string;
}
interface AdviserTypeDomain {
  uuid: UuidAdviser;
  name: NameAdviser;
}
export class AdviserEntity extends AggregateRoot<AdviserTypePrimitives> {
  readonly uuid: UuidAdviser;
  readonly name: NameAdviser;

  constructor(params: AdviserTypeDomain) {
    super();
    Object.assign(this, params);
  }

  toPrimitives(): AdviserTypePrimitives {
    return {
      uuid: this.uuid.value,
      name: this.name.value,
    };
  }

  static fromPrimitives(primitives: AdviserTypePrimitives): AdviserEntity {
    return new AdviserEntity({
      uuid: new UuidAdviser(primitives.uuid),
      name: new NameAdviser(primitives.name),
    });
  }
}
