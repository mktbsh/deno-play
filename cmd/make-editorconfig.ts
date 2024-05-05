#!/usr/bin/env -S deno run --allow-read --allow-write

const template = `root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
max_line_length = 80
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false
`;

const [path] = Deno.args;

if (!path) {
  console.error('make-editorconfig.ts /path/to/dir')
  Deno.exit(1);
}

const stat = await Deno.lstat(path);

if (!stat.isDirectory) {
  console.error(`path: ${path} is not a directory`)
  Deno.exit(1);
}

await Deno.writeTextFile(`${path}/.editorconfig`, template);

