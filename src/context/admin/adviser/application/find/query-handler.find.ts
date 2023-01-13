import { Query } from "../../../../shared/domain/query/base.query";
import { QueryHandler } from "../../../../shared/domain/query/handler.query";
import { FindAllAdviserApplication } from "./service.find";
import { FindAllQueryAdviser } from "./quey-bus.find";
import { FindAllAdviserResponse } from "./query-response.find";

export class FindAllAdviserQueryHandler
  implements QueryHandler<FindAllQueryAdviser, FindAllAdviserResponse[]>
{
  constructor(private repository: FindAllAdviserApplication) {}

  subscribedTo(): Query {
    return FindAllQueryAdviser;
  }

  handle(_query: FindAllQueryAdviser): Promise<FindAllAdviserResponse[]> {
    return this.repository.run();
  }
}
