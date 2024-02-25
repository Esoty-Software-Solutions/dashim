import { faker } from "@faker-js/faker";
import cuid2 from "@paralleldrive/cuid2";
import fs from "fs";
import readline from "readline";
import * as GeneratedFunctions from "../prisma/fakeData/functions";
import { isCuid } from "@paralleldrive/cuid2";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { computed } from "vue";

const tablesFullObject = Prisma.ModelName;
const tablesFullList = Object.values(Prisma.ModelName);

const dbmlFIlePath = "../server/prisma/dbml/schema.dbml";

async function extractRefs(filePath: string) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const refs: { [key: string]: any } = {};

  for await (const line of rl) {
    const match = line.match(/Ref: (\w+)\.(\w+) [-|>] (\w+)\.(\w+)/);
    //! Below line adds < relationship symbol. This needs to be evaluated further
    // const match = line.match(/Ref: (\w+)\.(\w+) [-><] (\w+)\.(\w+)/);
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
// console.log(tableRefs);

const tableDep: { [key: string]: string[] } = {};

for (const [table, relations] of Object.entries(tableRefs)) {
  tableDep[table] = Object.values(relations);
}
console.info("tableDep generated...");
// console.log(tableDep);

const visited: { [key: string]: boolean } = {};
const sortedTable: string[] = [];

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
    topologicalSort(table, visited, sortedTable, tableDep);
  }
});

console.info("stack generated...");
// console.log(sortedTable); // This will print the stack array to the console

export interface Object {
  [key: string]: any;
}

async function fieldOverride(
  object: Object,
  { randomness = 0.5, tableName = "" } = {},
) {
  function sanityCheck(key: string, OverrideDefined = false) {
    if (key in object) {
      if (
        OverrideDefined ||
        (object[key] === undefined && Math.random() < randomness)
      ) {
        return true;
      }
    }
    return false;
  }

  function normalize(text: string) {
    return text
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "");
  }

  function generateSearchName(text: string) {
    let result = text;

    // Generate variations of the full name with each character skipped
    for (let i = 0; i < text.length; i++) {
      const variation = text.slice(0, i) + text.slice(i + 1);
      result += " " + variation;
    }

    return result;
  }

  if (sanityCheck("id", true)) {
    if (!isCuid(object["id"])) object["id"] = cuid2.createId();
  }

  if (sanityCheck("createdAt", true)) {
    object["createdAt"] = faker.date.past({
      years: 12,
      refDate: "2023-01-01T00:00:00.000Z",
    });
    if (sanityCheck("updatedAt", true)) {
      object["updatedAt"] = faker.date.between({
        from: object["createdAt"],
        to: new Date(),
      });
    }
  }
  if (sanityCheck("email")) {
    object["email"] = faker.internet.email();
  }

  if (sanityCheck("passwordHash", true)) {
    object["passwordHash"] = await bcrypt.hash("123", 10);
  }

  if (sanityCheck("phone")) {
    object["phone"] = faker.phone.number();
  }

  if (sanityCheck("birthDate", true)) {
    object["birthDate"] = faker.date.past({
      years: 85,
      refDate: "2019-01-01T00:00:00.000Z",
    });
  }

  if (sanityCheck("secondName")) {
    object["secondName"] = faker.person.middleName();
    if (sanityCheck("thirdName")) {
      object["thirdName"] = faker.person.firstName();
      if (sanityCheck("fourthName")) {
        object["fourthName"] = faker.person.firstName();
        if (sanityCheck("fifthName")) {
          object["fifthName"] = faker.person.firstName();
        }
      }
    }
  }

  if (sanityCheck("searchName", true)) {
    object["searchName"] = /*generateSearchName*/(
      normalize(
        [
          object["firstName"],
          object["secondName"],
          object["thirdName"],
          object["fourthName"],
          object["lastName"],
        ]
          .filter((name) => name) // Remove any empty or undefined names
          .map((name) => (name ? name.replace(/\s/g, "") : "")) // Trim whitespace from each name
          .join(" "), // Concatenate the names with a space
      ),
    );
  }

  if (sanityCheck("address")) {
    object["address"] = faker.location.streetAddress();
  }

  if (sanityCheck("deviceName", true)) {
    object["deviceName"] = faker.person.fullName();
  }

  if (sanityCheck("token", true)) {
    object["deviceName"] = faker.string.alphanumeric({
      length: { min: 5, max: 15 },
    });
  }

  if (sanityCheck("code", true)) {
    object["code"] = faker.database.mongodbObjectId();
  }

  if ((tableName !== "" && sanityCheck("name", true)) || sanityCheck("name")) {
    // console.log("generating name for table: ", tableName);
    switch (tableName) {
      case "Institution":
      case "MedicalCenter":
      case "Tenant":
        object["name"] = faker.company.name();
        break;
      case "DiagnosisAttachment":
        object["name"] = faker.system.fileName();
        break;
      case "PatientService":
      case "MedicalService":
      case "MedicalServiceTemplate":
        object["name"] = faker.commerce.productName();
        break;
      case "BenefitPackage":
      case "InsurancePolicy":
        object["name"] = faker.commerce.product();
        break;
      default:
        object["name"] = faker.person.firstName();
        break;
    }
  }

  // TODO: Produce Arabic text
  // if (sanityCheck("english", true) || tableName !== "") { //TODO: not sure why tableName exist so I removed it
  if (sanityCheck("english", true)) {
    object["english"] = faker.string.alpha({ length: { min: 5, max: 15 } });
    if (object["name"]) {
      //replace name with english
      object["name"] = object["english"];
    }
    if ((sanityCheck("arabic"), true)) {
      object["arabic"] = faker.string.alpha({ length: { min: 5, max: 15 } });
    }
  }

  if (sanityCheck("legacyCode")) {
    object["legacyCode"] = faker.string.alpha({ length: { min: 5, max: 15 } });
  }

  if (sanityCheck("residence")) {
    object["residence"] = faker.location.state();
  }

  if (sanityCheck("country")) {
    object["country"] = faker.location.country();
    if (sanityCheck("city")) {
      object["city"] = faker.location.city();
    }
  }

  if (sanityCheck("cityHQ")) {
    object["cityHQ"] = faker.location.city();
  }

  if (sanityCheck("hash")) {
    object["hash"] = faker.string.nanoid({ min: 20, max: 75 });
  }

  if (sanityCheck("isActive")) {
    object["isActive"] = faker.datatype.boolean(randomness);
    if (!object["isActive"] && sanityCheck("deactivationReason")) {
      object["deactivationReason"] = faker.lorem.sentence();
    }
  }

  if (sanityCheck("isVerified")) {
    object["isVerified"] = faker.datatype.boolean(randomness);
  }

  if (sanityCheck("Note")) {
    object["Note"] = faker.lorem.paragraphs({ min: 1, max: 5 });
  }

  if (sanityCheck("description")) {
    object["description"] = faker.lorem.sentences({ min: 1, max: 5 });
  }

  if (sanityCheck("nationality")) {
    object["nationality"] = faker.location.country();
  }

  if (sanityCheck("nationalID")) {
    object["nationalID"] = faker.string.alphanumeric({
      length: { min: 10, max: 20 },
    });
  }

  if (sanityCheck("avatar")) {
    object["avatar"] = faker.image.avatar();
  }

  if (sanityCheck("logo")) {
    object["logo"] = faker.image.avatar();
  }

  if (sanityCheck("latitude")) {
    object["latitude"] = faker.location.latitude();
    if (sanityCheck("longitude", true)) {
      object["longitude"] = faker.location.longitude();
    }
  }

  if (sanityCheck("website", true)) {
    object["website"] = faker.internet.url();
  }

  if (sanityCheck("facebookLink", true)) {
    object["facebookLink"] = faker.internet.url();
  }

  if (sanityCheck("googleMapsLink", true)) {
    object["googleMapsLink"] = faker.internet.url();
  }

  if (sanityCheck("twitterLink", true)) {
    object["twitterLink"] = faker.internet.url();
  }

  if (sanityCheck("instagramLink", true)) {
    object["instagramLink"] = faker.internet.url();
  }

  if (sanityCheck("link", true)) {
    object["link"] = faker.internet.url();
  }

  if (sanityCheck("contentType", true)) {
    object["contentType"] = faker.system.mimeType();
  }

  return object;
}
// In the module where the functions are defined
export type Functions = {
  [key: string]: Function; // This is an index signature
  // ...other properties...
};

const functions = GeneratedFunctions;

export const SeedHelper = {
  tableDep,
  tableRefs,
  sortedTable,
  fieldOverride,
  functions,
  tablesFullList,
  tablesFullObject,
};
