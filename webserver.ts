import { serve } from "./deps.ts";

const port = 4242;


const handler = (request: Request): Response => {
  const body = `Hello world \nYour user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }`;

  return new Response(body, { status: 200 });
};

console.info(`Server started on port ${port}`);

 serve(handler, {port});
//deno run --allow-net webserver.ts