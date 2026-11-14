/**
 * Production startup file for hosts that boot a Node file directly
 * (e.g. GoDaddy cPanel "Setup Node.js App" → Application startup file: server.js).
 *
 * Run `npm run build` first. The server listens on the port the platform assigns via
 * process.env.PORT (which may also be a socket path, so it is passed through as-is).
 *
 * Kept as CommonJS because older cPanel Passenger versions can't load ES module startup files.
 */
/* eslint-disable @typescript-eslint/no-require-imports */
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log(`> Ready on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start Next.js server", error);
    process.exit(1);
  });
