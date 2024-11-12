import fastify from "fastify";
import fastifyCors from "@fastify/cors";

const app = fastify();

const start = async () => {
    try {
        await app.listen({ port: 3333})
    } catch (error) {
        
    }
}