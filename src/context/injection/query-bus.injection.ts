import { FindAllAdviserQueryHandler } from "../admin/adviser/application/find/query-handler.find";
import { QueryHandlersInformation } from "../shared/infrastructure/query-bus/handlers-information";
import { InMemoryQueryBus } from "../shared/infrastructure/query-bus/in-memory-bus";
import { adviserFindApplication } from "./adviser.injection";

const findAllAdviserQueryHandler = new FindAllAdviserQueryHandler(adviserFindApplication)
const queryHandlersInformation = new QueryHandlersInformation([findAllAdviserQueryHandler])
const inMemoryQueryBus = new InMemoryQueryBus(queryHandlersInformation);

export { inMemoryQueryBus };