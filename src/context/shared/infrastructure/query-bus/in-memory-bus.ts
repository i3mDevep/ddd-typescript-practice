import { Query } from "../../domain/query/base.query";
import { QueryBus } from "../../domain/query/bus.query";
import { Response } from "../../domain/query/response.query";
import { QueryHandlersInformation } from "./handlers-information";

export class InMemoryQueryBus implements QueryBus {
  constructor(private queryHandlersInformation: QueryHandlersInformation) {}
  ask<R extends Response>(query: Query): Promise<R> {
    const handler = this.queryHandlersInformation.search(query);
    return handler.handle(query) as unknown as Promise<R>;
  }
}
