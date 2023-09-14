import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadoVideoRoute } from "./routes/upload-video";
import { createTrasncriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

 const app = fastify()

 app.register(fastifyCors, {
   origin: '*'
 })

 app.register(getAllPromptsRoute)

 app.register(uploadoVideoRoute)

 app.register(createTrasncriptionRoute)

 app.register(generateAICompletionRoute)

 app.listen({
    port: 3333,
 }).then(() => {
    console.log("HTTP Server Running!")
 })