import { Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname.substring(1));

const TableNames = Object.values(Prisma.ModelName);

const tableNamesCO = [
  "User",
  "Post",
  "Comment",
  "Like",
  "Follow",
  "Notification",
];

const templatePath = path.join(__dirname, "schemaRouterFileTemplate.ts");
const template = fs.readFileSync(templatePath, "utf-8");

const templatePathCO = path.join(__dirname, "schemaRouterCOFileTemplate.ts");
const templateCO = fs.readFileSync(templatePathCO, "utf-8");

const outputDirectory: string = path.resolve(__dirname, "..", "src", "routers");
let fileCounter = 0;

TableNames.forEach((TableName) => {
  const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);
  let output: string = "";
  if (tableName in tableNamesCO) {
    output = template
      .replace(/User/g, TableName)
      .replace(/user(?!Id)/g, tableName);
  } else {
    output = templateCO
      .replace(/User/g, TableName)
      .replace(/user(?!Id)/g, tableName);
  }
  fs.writeFileSync(path.join(outputDirectory, `${tableName}.model.ts`), output);
  fileCounter++;
});

console.info(`Generated ${fileCounter} files`);
console.info("output is: ", outputDirectory);
