import { Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { note } from "./routes/note";
import { user } from "./routes/user";

const app = new Elysia()
  // apply the swagger plugin
  .use(swagger())
  .onError(({ error, code }) => {
    if (code == 'NOT_FOUND') return 'Not Found :('

    console.error(error)
  })
  .use(user)
  .use(note)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
