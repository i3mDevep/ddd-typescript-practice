import express, { Application, Request, Response } from "express";
import { FindAllAdviserResponse } from "../../context/admin/adviser/application/find/query-response.find";
import { FindAllQueryAdviser } from "../../context/admin/adviser/application/find/quey-bus.find";
import { AdviserEntity } from "../../context/admin/adviser/domain/aggregate/adviser.aggregate";
import {
  adviserCreateApplication,
  inMemoryQueryBus,
} from "../../context/injection";

class App {
  expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.mountMiddlewares();
    this.mountHealthCheck();
  }

  mountMiddlewares(): void {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true }));

    this.expressApp.get("/adviser", async (req, res) => {
      const query = new FindAllQueryAdviser();
      const queryResponse: FindAllAdviserResponse[] =
        await inMemoryQueryBus.ask(query);
      res.json(queryResponse);
    });

    this.expressApp.post("/adviser", async (req, res) => {
      const { name, uuid } = req.body;
      await adviserCreateApplication.run(
        AdviserEntity.fromPrimitives({ name, uuid })
      );
      res.send("Adviser saved");
    });
  }

  mountHealthCheck(): void {
    this.expressApp.get("/", (req: Request, res: Response) => {
      res.send("All is good!");
    });

    this.expressApp.get("/healthcheck", (req, res) => {
      res.send("All is good!");
    });
  }
}

export default new App().expressApp;
