import fs from "fs";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use(async (req, res) => {
    try {
      const url = req.originalUrl;

      let template = fs.readFileSync(
        path.resolve("./index.html"),
        "utf-8"
      );

      template = await vite.transformIndexHtml(
        url,
        template
      );

      const { render } =
        await vite.ssrLoadModule(
          "/src/entry-server.jsx"
        );

      const appHtml = render(url);

      const html = template.replace(
        "<!--ssr-outlet-->",
        appHtml
      );

      res
        .status(200)
        .set({
          "Content-Type": "text/html",
        })
        .end(html);

    } catch (error) {
      vite.ssrFixStacktrace(error);

      console.error(error);

      res
        .status(500)
        .end(error.stack);
    }
  });

  app.listen(5173, () => {
    console.log(
      "SSR Host running at http://localhost:5173"
    );
  });
}

startServer();