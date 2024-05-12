#!/usr/bin/env -S deno run --allow-read --allow-write

const json = {
  "$schema": "https://biomejs.dev/schemas/1.7.0/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "parser": {
      "unsafeParameterDecoratorsEnabled": true
    },
    "formatter": {
      "quoteStyle": "single",
      "jsxQuoteStyle": "single",
      "quoteProperties": "asNeeded",
      "trailingComma": "none",
      "semicolons": "asNeeded",
      "arrowParentheses": "asNeeded",
      "enabled": true,
      "indentStyle": "space",
      "indentWidth": 2,
      "lineEnding": "lf",
      "lineWidth": 80,
      "bracketSameLine": true,
      "bracketSpacing": true,
      "attributePosition": "auto"
    }
  },
  "json": {
    "parser": {
      "allowComments": true,
      "allowTrailingCommas": true
    },
    "formatter": {
      "enabled": true,
      "indentStyle": "space",
      "indentWidth": 2,
      "lineEnding": "lf",
      "lineWidth": 100,
      "trailingCommas": "none"
    }
  }
}

const [path] = Deno.args;

if (!path) {
  console.error('clone-biome-json.ts /path/to/dir')
  Deno.exit(1);
}

const stat = await Deno.lstat(path);

if (!stat.isDirectory) {
  console.error(`path: ${path} is not a directory`)
  Deno.exit(1);
}

await Deno.writeTextFile(`${path}/biome.json`, JSON.stringify(json, null, json.json.formatter.indentWidth));
