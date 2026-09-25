const { spawn } = require("child_process");

const port = process.env.PORT || 3000;

console.log(`Starting JSON Server on port ${port}`);

const server = spawn(
  "npx",
  [
    "json-server",
    "db.json",
    "--host",
    "0.0.0.0",
    "--port",
    port.toString()
  ],
  {
    stdio: "inherit"
  }
);

server.on("close", (code) => {
  process.exit(code);
});
