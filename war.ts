import fs from "fs";

const warName = process.argv[2];
if (!warName) {
  console.error("Please provide a name for the new war");
  process.exit(1);
}

// creates a new folder
fs.mkdirSync(warName);
// create a new index.ts file inside the newly created folder
fs.writeFileSync(`${warName}/index.ts`, `console.log("Hello, ${warName}!")`);
