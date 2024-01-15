import { Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";

const TableNames = Object.values(Prisma.ModelName);
const __dirname = path.dirname(new URL(import.meta.url).pathname.substring(1));

const templatePath = path.join(__dirname, "modelFileTemplate.ts");
const template = fs.readFileSync(templatePath, "utf-8");

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

// console.info("source are:\n", sourceEnumsDir, "\n", sourceObjectDir);
// console.info("output are:\n", outputEnumsDir, "\n", outputObjectDir);

// Remove all files in the output directory
console.info("removing files in output directory");
fs.rmSync(outputEnumsDir, { recursive: true, force: true });
fs.rmSync(outputObjectDir, { recursive: true, force: true });
// Recreate the directories
fs.mkdirSync(outputEnumsDir, { recursive: true });
fs.mkdirSync(outputObjectDir, { recursive: true });

// Read the source directory
function copyFiles(sourceDirectory: string, destinationDirectory: string) {
  console.info(
    "copying files from: ",
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
