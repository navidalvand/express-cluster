const cluster = require("cluster");
const cpuCount = require("os").cpus().length;
const { fileURLToPath } = require("url");

console.log(`cpu count: ${cpuCount}`);
console.log(`process id: ${process.pid}`);

cluster.setupPrimary({
  exec: __dirname + "/server.js",
});

for (let i = 0; i < cpuCount; i++) {
  cluster.fork();
}

cluster.on("exit", (worker, code, signal) => {
  console.log(`worker process ${worker.process.pid} has been killed`);
  console.log("starting another one...");
  cluster.fork();
});
