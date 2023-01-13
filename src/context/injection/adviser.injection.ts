import { CreateAdviserApplication } from "../admin/adviser/application/create/create.application";
import { FindAllAdviserApplication } from "../admin/adviser/application/find/service.find";
import { AdviserPersistenceInfrastructure } from "../../context/admin/adviser/infrastructure/adviser.infrastructure";

const adviserPersistenceRepository = new AdviserPersistenceInfrastructure();
const adviserFindApplication = new FindAllAdviserApplication(
  adviserPersistenceRepository
);
const adviserCreateApplication = new CreateAdviserApplication(
  adviserPersistenceRepository
);

export { adviserFindApplication, adviserCreateApplication };