const fastify = require("fastify")({ logger: true });

fastify.register(require("fastify-cors"), {
  // put your options here
});

fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "fastify-api" },
  },
});

fastify.register(require("./routes/routes"));

const start = async () => {
  try {
    await fastify.listen(5000);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
