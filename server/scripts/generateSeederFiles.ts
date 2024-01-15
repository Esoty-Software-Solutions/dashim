import { faker } from "@faker-js/faker";
import cuid2 from "@paralleldrive/cuid2";
import fs from "fs";
import readline from "readline";
import * as functions from "../prisma/fakeData/functions";

const dbmlFIlePath = "../prisma/dbml/schema.dbml";

async function extractRefs(filePath: string) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const refs: { [key: string]: any } = {};

  for await (const line of rl) {
    const match = line.match(/Ref: (\w+)\.(\w+) > (\w+)\.(\w+)/);
    if (match) {
      const sourceTable = match[1];
      const sourceField = match[2];
      const targetTable = match[3];

      if (!refs[sourceTable]) {
        refs[sourceTable] = {};
      }

      refs[sourceTable][sourceField] = targetTable;
    }
  }

  return refs;
}

const tableRefs = await extractRefs(dbmlFIlePath);

console.info("tableRefs extracted...");
// console.log(tableRefs)

const tableDep: { [key: string]: string[] } = {};

for (const [table, relations] of Object.entries(tableRefs)) {
  tableDep[table] = Object.values(relations);
}
console.info("tableDep generated...");
// console.log(tableDep)

const visited: { [key: string]: boolean } = {};
const stack: string[] = [];

interface Refs {
  [key: string]: string[];
}

function topologicalSort(
  table: string,
  visited: { [key: string]: boolean },
  stack: string[],
  refs: Refs,
) {
  visited[table] = true;
  const edges: string[] = refs[table] || [];

  edges.forEach((node: string) => {
    if (!visited[node]) {
      topologicalSort(node, visited, stack, refs);
    }
  });

  stack.push(table); // Use push instead of unshift
}

Object.keys(tableDep).forEach((table: string) => {
  if (!visited[table]) {
    topologicalSort(table, visited, stack, tableDep);
  }
});

console.info("stack generated...");
// console.log(stack) // This will print the stack array to the console

interface Object {
  [key: string]: any;
}

async function fieldOverride(object: Object) {
  const randomness = 0.5;
  for (const [key, value] of Object.entries(object)) {
    if (key === "id" && "id" in object) {
      object[key] = cuid2.createId();
    }
    if (key === "createdAt" && "createdAt" in object) {
      object[key] = faker.date.past({
        years: 12,
        refDate: "2023-01-01T00:00:00.000Z",
      });
      if (Math.random() < randomness && "updatedAt" in object) {
        object["updatedAt"] = faker.date.between({
          from: object[key],
          to: new Date(),
        });
      }
    }
    if (key === "email" && "email" in object) {
      object[key] = faker.internet.email();
    }
    if (key === "username" && "username" in object) {
      object[key] = faker.internet.userName();
    }
    if (key === "passwordHash" && "passwordHash" in object) {
      object[key] = faker.internet.password();
    }
    if (key === "phone" && "phone" in object) {
      object[key] = faker.phone.number();
    }
    if (key === "birthDate" && "birthDate" in object) {
      object[key] = faker.date.past({
        years: 70,
        refDate: "2019-01-01T00:00:00.000Z",
      });
    }
    if (key === "secondName" && "secondName" in object) {
      object[key] = faker.person.firstName();
    }
    if (Math.random() < randomness) {
      if (key === "thirdName" && "thirdName" in object) {
        object[key] = faker.person.firstName();
      }
      if (key === "fourthName" && "fourthName" in object) {
        object[key] = faker.person.firstName();
      }
    }
    if (
      key === "searchName" &&
      "searchName" in object &&
      "firstName" in object &&
      "secondName" in object &&
      "thirdName" in object &&
      "thirdName" in object &&
      "fourthName" in object &&
      "lastName" in object
    ) {
      object[key] =
        (object["firstName"] || "") +
        (object["secondName"] || "") +
        (object["thirdName"] || "") +
        (object["fourthName"] || "") +
        (object["lastName"] || "");
    }

    if (key === "address" && Math.random() < randomness) {
      object[key] = faker.location.streetAddress();
    }

    if (key === "english") {
      if (Math.random() < randomness) {
        object[key] = faker.string.alpha({ length: { min: 5, max: 15 } });
        if (object["name"]) {
          //replace name with english
          object["name"] = object[key];
        }
        object["arabic"] = faker.string.alpha({ length: { min: 5, max: 15 } });
      }
    }

    if (key === "legacyCode") {
      if (Math.random() < randomness) {
        object[key] = faker.string.alpha({ length: { min: 5, max: 15 } });
      }
    }

    if (key === "residence") {
      if (Math.random() < randomness) {
        object[key] = faker.location.city();
      }
    }

    if (key === "hash") {
      if (Math.random() < randomness) {
        object[key] = faker.string.nanoid({ min: 5, max: 15 });
      }
    }

    // if (typeof value === 'object' && !Array.isArray(value)) {
    //   console.log('recursion on key: ', key)
    //   object[key] = await fieldOverride(value)
    // }

    // if (typeof value === 'object') {
    //   //if value is object
    //   //if value is array
    //   if (Array.isArray(value)) {
    //     //iterate over array
    //     for (const [index, item] of value.entries()) {
    //       //if item is object
    //       if (typeof item === 'object') {
    //         //if item has id
    //         if (item.id) {
    //           //replace item with id
    //           object[key][index] = item.id
    //         }
    //       }
    //     }
    //   } else {
    //     //if value is object
    //     //if value has id
    //     if (value.id) {
    //       //replace value with id
    //       object[key] = value.id
    //     }
    //   }
    // }
  }

  return object;
}

export const SeedHelper = {
  tableDep,
  tableRefs,
  stack,
  fieldOverride,
  functions,
};
