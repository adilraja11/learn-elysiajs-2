import { Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { note } from "./routes/note";
import { user } from "./routes/user";

const app = new Elysia()
  // apply the swagger plugin
  .use(swagger())
  .use(note)
  .use(user)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
