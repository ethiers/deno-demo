import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/dotenv@v3.2.0/mod.ts";


function handler(_req: Request): Response {
  return new Response("Hello, World!!!");
}

serve(handler, {port: 8000});
