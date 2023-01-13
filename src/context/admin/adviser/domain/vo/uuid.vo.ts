import { StringValueObject } from "../../../../shared/domain/vo/string.vo";

export class UuidAdviser extends StringValueObject {
  constructor(value: string) {
    super(value);
    // this.ensureLength(3);
  }
  ensureLength(length: number): void {
    console.log(this.value.length)
    if (this.value.length !== length) {
      throw new Error(`UuidAdviser length must be ${length}`);
    }
  }
}
