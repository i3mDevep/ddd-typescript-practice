import { ServerBootstrap } from "./bootstrap/server.boostrap";
const serverHttp = new ServerBootstrap();

(async () => {
  const tasks = [serverHttp.initialize()];
  const tasksCompleted = await Promise.all(tasks);
  console.info(`Tasks completed: ${tasksCompleted.length}`);
})();
