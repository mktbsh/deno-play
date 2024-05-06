#!/usr/bin/env -S deno run --allow-read --allow-write

import { CSS, render } from "https://deno.land/x/gfm@0.6.0/mod.ts";

const markdown = await Deno.readTextFile("README.md");
const body = render(markdown);

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      main {
        max-width: 768px;
        margin: 0 auto;
      }
      ${CSS}
    </style>
  </head>
  <body>
    <main data-color-mode="light" data-light-theme="light" data-dark-theme="dark" class="markdown-body">
      ${body}
    </main>
  </body>
</html>
`;

await Deno.writeTextFile('cmd/index.html', html)
