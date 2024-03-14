import { Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname.substring(1));

const TableNames = Object.values(Prisma.ModelName);

const templatePath = path.join(__dirname, "modelFileTemplate.ts");

const template = fs.readFileSync(templatePath, "utf-8");

const outputDirectory: string = path.resolve(__dirname, "..", "src", "models");

console.info("removing files in output directory");
fs.rmSync(outputDirectory, { recursive: true, force: true });
// Recreate the directories
fs.mkdirSync(outputDirectory, { recursive: true });

TableNames.forEach((TableName) => {
  const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);
  const output: string = template
    .replace(/User/g, TableName)
    .replace(/user(?!Id)/g, tableName);

  fs.writeFileSync(path.join(outputDirectory, `${tableName}.model.ts`), output);
});

console.log("output is: ", outputDirectory);
