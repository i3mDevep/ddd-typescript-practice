import http from "http";
import BootstrapBase from "./base.boostrap";
import app from "../apps/api/app"

const { PORT_SERVER_HTTP = 3002 } = process.env;

export class ServerBootstrap extends BootstrapBase {
  initialize(): Promise<boolean | Error> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(app);
      server
        .listen(PORT_SERVER_HTTP)
        .on("listening", () => {
          resolve(true);
          console.log(`Server is running on port ${PORT_SERVER_HTTP}`);
        })
        .on("error", reject);
    });
  }
}
