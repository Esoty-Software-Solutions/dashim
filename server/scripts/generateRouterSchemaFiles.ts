import { Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";

const TableNames = Object.values(Prisma.ModelName);
const __dirname = path.dirname(new URL(import.meta.url).pathname.substring(1));

const tableNamesCO = ["User"];

const sourceEnumsDir: string = path.resolve(
  __dirname,
  "..",
  "prisma",
  "generated",
  "schemas",
  "enums",
);

const outputEnumsDir: string = path.resolve(
  __dirname,
  "..",
  "src",
  "schemas",
  "enums",
);

const sourceObjectDir: string = path.resolve(
  __dirname,
  "..",
  "prisma",
  "generated",
  "schemas",
  "objects",
);

const outputObjectDir: string = path.resolve(
  __dirname,
  "..",
  "src",
  "schemas",
  "objects",
);

const SchemaTemplatePath = path.join(__dirname, "schemaRouterFileTemplate.ts");
const SchemaTemplate = fs.readFileSync(SchemaTemplatePath, "utf-8");

const SchemaTemplatePathCO = path.join(
  __dirname,
  "schemaRouterCOFileTemplate.ts",
);
const SchemaTemplateCO = fs.readFileSync(SchemaTemplatePathCO, "utf-8");

const SchemaOutputDir: string = path.resolve(
  __dirname,
  "..",
  "src",
  "schemas",
  "routers",
);

const routeTemplatePath = path.join(__dirname, "routerFileTemplate.ts");
const routeTemplate = fs.readFileSync(routeTemplatePath, "utf-8");

const routeTemplatePathCO = path.join(__dirname, "routerCOFileTemplate.ts");
const routeTemplateCO = fs.readFileSync(routeTemplatePathCO, "utf-8");

const routeOutputDir: string = path.resolve(__dirname, "..", "src", "routers");

// console.info("source are:\n", sourceEnumsDir, "\n", sourceObjectDir);
// console.info("output are:\n", outputEnumsDir, "\n", outputObjectDir);

// Remove all files in the output directory
console.info("removing files in output directory");
fs.rmSync(outputEnumsDir, { recursive: true, force: true });
fs.rmSync(outputObjectDir, { recursive: true, force: true });
fs.rmSync(SchemaOutputDir, { recursive: true, force: true });
// Recreate the directories
fs.mkdirSync(outputEnumsDir, { recursive: true });
fs.mkdirSync(outputObjectDir, { recursive: true });
fs.mkdirSync(SchemaOutputDir, { recursive: true });

// Read the source directory
function copyFiles(sourceDirectory: string, destinationDirectory: string) {
  console.info(
    "copying object schema files from: ",
    sourceDirectory,
    "to: ",
    destinationDirectory,
  );
  let fileCounter = 0;
  fs.readdir(sourceDirectory, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    // Map each file to a promise that resolves when the file is copied
    const copyPromises = files.map((file) => {
      return new Promise<void>((resolve, reject) => {
        const sourceFilePath = path.join(sourceDirectory, file);
        const destinationFilePath = path.join(destinationDirectory, file);

        fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
          if (err) {
            console.error(`File ${file} could not be copied.`, err);
            reject(err);
          } else {
            fileCounter++;
            resolve();
          }
        });
      });
    });

    // Wait for all the files to finish copying
    Promise.all(copyPromises)
      .then(() => {
        console.info(`copied ${fileCounter} files`);
      })
      .catch((err) => {
        console.error("An error occurred while copying the files.", err);
      });
  });
}

copyFiles(sourceEnumsDir, outputEnumsDir);
copyFiles(sourceObjectDir, outputObjectDir);

let fileCounter = 0;

TableNames.forEach((TableName) => {
  const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);
  let output: string = "";
  if (tableNamesCO.includes(TableName)) {
    console.info("generating schema file for: ", TableName);
    output = SchemaTemplate.replace(/User/g, TableName).replace(
      /user(?!Id)/g,
      tableName,
    );
  } else {
    output = SchemaTemplateCO.replace(/User/g, TableName).replace(
      /user(?!Id)/g,
      tableName,
    );
  }
  fs.writeFileSync(
    path.join(SchemaOutputDir, `${tableName}.schema.ts`),
    output,
  );
  fileCounter++;
});

console.info(`Generated ${fileCounter} files`);
console.info("Schema output is: ", SchemaOutputDir);

fileCounter = 0;

TableNames.forEach((TableName) => {
  const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);
  let output: string = "";
  if (tableName in tableNamesCO) {
    output = routeTemplate
      .replace(/User/g, TableName)
      .replace(/user(?!Id)/g, tableName);
  } else {
    output = routeTemplateCO
      .replace(/User/g, TableName)
      .replace(/user(?!Id)/g, tableName);
  }
  fs.writeFileSync(path.join(routeOutputDir, `${tableName}.router.ts`), output);
  fileCounter++;
});

console.info(`Generated ${fileCounter} files`);
console.info("output is: ", routeOutputDir);

// TODO: edit the _.router.ts files to import the correct schema files
