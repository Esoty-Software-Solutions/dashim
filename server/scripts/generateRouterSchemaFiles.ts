import { Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";
// import { Project, ts } from "ts-morph";

const TableNames = Object.values(Prisma.ModelName);
const __dirname = path.dirname(new URL(import.meta.url).pathname.substring(1));

const tableNamesDoNotCO = [""];

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

// const SchemaTemplatePath = path.join(__dirname, "schemaRouterFileTemplate.ts");
// const SchemaTemplate = fs.readFileSync(SchemaTemplatePath, "utf-8");

// const SchemaTemplatePathCO = path.join(
//   __dirname,
//   "schemaRouterCOFileTemplate.ts",
// );
// const SchemaTemplateCO = fs.readFileSync(SchemaTemplatePathCO, "utf-8");

const SchemaOutputDir: string = path.resolve(
  __dirname,
  "..",
  "src",
  "schemas",
  "routers",
);

const routeTemplatePath = path.join(__dirname, "routerFileTemplate.ts");
const routeTemplate = fs.readFileSync(routeTemplatePath, "utf-8");

const routeTemplatePathCO = path.join(__dirname, "routerFileTemplate.ts");
const routeTemplateCO = fs.readFileSync(routeTemplatePathCO, "utf-8");

const routeOutputDir: string = path.resolve(__dirname, "..", "src", "routers");

// console.info("source are:\n", sourceEnumsDir, "\n", sourceObjectDir);
// console.info("output are:\n", outputEnumsDir, "\n", outputObjectDir);

// Remove all files in the output directory
console.info("removing files in output directory");
fs.rmSync(outputEnumsDir, { recursive: true, force: true });
fs.rmSync(outputObjectDir, { recursive: true, force: true });
fs.rmSync(SchemaOutputDir, { recursive: true, force: true });
fs.rmSync(path.join(routeOutputDir, "cruds"), { recursive: true, force: true });

// Recreate the directories
fs.mkdirSync(outputEnumsDir, { recursive: true });
fs.mkdirSync(outputObjectDir, { recursive: true });
fs.mkdirSync(SchemaOutputDir, { recursive: true });
fs.mkdirSync(path.join(routeOutputDir, "cruds"), { recursive: true });

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

// TableNames.forEach((TableName) => {
//   const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);
//   let output: string = "";
//   console.info("generating schema file for: ", TableName);
//   if (tableNamesDoNotCO.includes(TableName)) {
//     output = SchemaTemplate.replace(/User/g, TableName).replace(
//       /user(?!Id)/g,
//       tableName,
//     );
//   } else {
//     output = SchemaTemplateCO.replace(/User/g, TableName).replace(
//       /user(?!Id)/g,
//       tableName,
//     );
//   }
//   fs.writeFileSync(
//     path.join(SchemaOutputDir, `${tableName}.schema.ts`),
//     output,
//   );
//   fileCounter++;
// });

// console.info(`Generated ${fileCounter} files`);
// console.info("Schema output is: ", SchemaOutputDir);

fileCounter = 0;

TableNames.forEach((TableName) => {
  const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);
  let output: string = "";
  if (tableName in tableNamesDoNotCO) {
    output = routeTemplate
      .replace(/User/g, TableName)
      .replace(/user(?!Id)/g, tableName);
  } else {
    output = routeTemplateCO
      .replace(/User/g, TableName)
      .replace(/user(?!Id)/g, tableName);
  }
  fs.writeFileSync(
    path.join(routeOutputDir, "cruds", `${tableName}.router.ts`),
    output,
  );
  fileCounter++;
});

console.info(`Generated ${fileCounter} router files`);
console.info("output is: ", path.join(routeOutputDir, "cruds"));

// creating the aggregate router

const routerTemplate = `import { Router } from "express";
export const crudRouter = Router();\n`;

function generateRouters(template: string) {
  const routerFilePath = path.join(routeOutputDir, `${template}.router.ts`); // adjust the path as needed

  // let crudRouterFile = routerTemplate;
  let crudRouterFile = routerTemplate.replace(
    "templateRouter",
    `${template}Router`,
  );

  fileCounter = 0;
  let importStatements = "";
  let routerStatements = "";

  TableNames.forEach((TableName) => {
    const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);
    // Generate import and router statements for each table
    const importStatement = `import { ${tableName}Router } from './${template}s/${tableName}.router';\n`;
    const routerStatement = `crudRouter.use("/${tableName}", ${tableName}Router );\n`;

    // Add import and router statements to their respective strings
    importStatements += importStatement;
    routerStatements += routerStatement;
  });

  // Add import statements to the top of the template
  crudRouterFile = importStatements + crudRouterFile;

  // Add router statements to the router object
  crudRouterFile = crudRouterFile + "\n\n" + routerStatements;
  // `\n\nexport const ${template}Router = router({\n${routerStatements}\n});`;

  console.log(`Added ${fileCounter} imports and routers to _.router.ts`);
  fs.writeFileSync(routerFilePath, crudRouterFile);
}

generateRouters("crud");

// TableNames.forEach((TableName) => {
//   const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);

//   const importRegex = new RegExp(`\\b${tableName}Router\\b`);
//   if (importRegex.test(fileContent)) {
//     return; // skip this iteration and go to the next one
//   }

//   // Add the import statement
//   const importStatement = `import { ${tableName}Router } from './${tableName}.router';\n`;
//   const importBlockRegex = /(import .*\n)+/;
//   fileContent = fileContent.replace(importBlockRegex, `$&${importStatement}`);

//   // Add the router to the routerObject
//   const routerObjectRegex = /(router\({)([\s\S]*?)(}\);)/;
//   fileContent = fileContent.replace(
//     routerObjectRegex,
//     `$1$2${tableName}: ${tableName}Router,\n$3`,
//   );
//   fileCounter++;
// });
