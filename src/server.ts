import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadoVideoRoute } from "./routes/upload-video";

 const app = fastify()

 app.register(getAllPromptsRoute)

 app.register(uploadoVideoRoute)

 app.listen({
    port: 3333,
 }).then(() => {
    console.log("HTTP Server Running!")
 })