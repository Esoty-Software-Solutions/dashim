import * as functions from "../prisma/fakeData/functions";
import { SeedHelper, type Object } from "../scripts/generateSeederFiles";
import { unGuardedPrisma } from "@config/db";
import { type Prisma } from "@prisma/client";
import { User } from "@models/user";
import { Gender } from "../src/models/gender";
import {
  FindManyFunctions,
  CreateManyFunctions,
  CountFunctions,
} from "./prismaMethods";

// const obj1 = functions.fakeBeneficiary();
// console.log(Object.keys(obj1));
// console.log(Object.keys(obj1).length);

// const obj2 = functions.fakeBeneficiaryComplete();
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj2).length);

// const obj1Keys = Object.keys(obj1);
// const obj2Keys = Object.keys(obj2);

// const difference = obj2Keys.filter((key) => !obj1Keys.includes(key));

// console.log("differences: \n", difference);

// console.log("testing undefined");

// console.log("thirdName ", obj2["thirdName"] === undefined);
// console.log("firstName ", obj2["firstName"] === undefined);
// console.log("aaa ", obj2["aaa"] === undefined);
// console.log("thirdName ", "thirdName" in obj2);
// console.log("firstName ", "firstName" in obj2);
// console.log("aaa ", "aaa" in obj2);

// console.log(Object.keys(SeedHelper.functions));
// const a = SeedHelper.functions["fakeBeneficiary"];
// console.log(a);
// console.log(a());

// console.log("SortedTables############\n", SeedHelper.sortedTable);
// console.log("tableDep############\n", SeedHelper.tableDep);
// console.log("tableRefs###########\n", SeedHelper.tableRefs);

// const tableRowIds: { [key: string]: string;  } = {};
type TableRowIds = { [key: string]: { id: string }[] };
const tableRowIds: TableRowIds = {};
// const tableRowIds: { [key: string]: string[]; id?: string[] } = {};

console.info("Seeding ", SeedHelper.tablesFullList.length, " tables");
// TODO: script to seed tables that have no dependencies
for (const TableName of SeedHelper.tablesFullList) {
  const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);
  if (!(TableName in SeedHelper.tableDep)) {
    console.log(TableName, ":", "no dependencies");
    // const test = await unGuardedPrisma['country'].deleteMany({where: {}});
    // const test = await unGuardedPrisma['country'].createMany({data: {}, skipDuplicates: true});
    // const test = await unGuardedPrisma["country"].count({ where: {} });
    // const test = await unGuardedPrisma['country'].findMany({where: {}, take: 0, skip: 0, orderBy:{}, select: {}});
    const count: number = await (unGuardedPrisma as any)[tableName].count(); // TODO: put in a try and catch
    console.log("Count before insertion: ", count);
    // await (unGuardedPrisma as any)[tableName].deleteMany();
    const size = 1000; // replace with your desired size
    const dataArray = await Promise.all(
      new Array(size).fill(null).map(async (data: Object) => {
        // console.log("starting an iteration");
        data = SeedHelper.functions["fake" + TableName + "Complete"]();
        await SeedHelper.fieldOverride(data);
        // console.log("ending an iteration");
        Object.keys(data).forEach((key) => {
          if (Number.isInteger(data[key])) {
            if (data[key] > 2147483647 || data[key] < -2147483648) {
              // console.error(
              //   `Value ${data[key]} at key ${key} is too large for an INT4 field.`,
              // );
              data[key] = Math.floor(Math.random() * 2147483647);
              // console.info(`${key} is reassigned to ${data[key]}.`);
            }
          }
          if (Array.isArray(data[key])) {
            data[key] = data[key].map((value: number) => {
              if (Number.isInteger(value)) {
                if (value > 2147483647 || value < -2147483648) {
                  // console.error(
                  //   `Value ${value} at key ${key} array is too large for an INT4 field.`,
                  // );
                  value = Math.floor(Math.random() * 2147483647);
                  // console.info(`Element of ${key} is reassigned to ${value}.`);
                }
              }
              return value;
            });
          }
        });
        return data;
      }),
    );
    console.log("pushing data for ", TableName);
    const CreateResults = await (unGuardedPrisma as any)[tableName].createMany({
      data: dataArray,
      skipDuplicates: true,
    });
    console.log(
      "Added ",
      CreateResults.count,
      " rows to ",
      TableName,
      " table",
    );
    tableRowIds[TableName] = await (unGuardedPrisma as any)[tableName].findMany(
      {
        select: { id: true },
      },
    );
  }
}

// console.log("tableRowIds############\n", tableRowIds);

// TODO: script to seed tables that have dependencies
for (const TableName of SeedHelper.sortedTable) {
  const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1);
  if (TableName in SeedHelper.tableDep) {
    console.log(TableName, ":", SeedHelper.tableDep[TableName]);
    let isTableReady = true; // are all dependencies seeded?
    // TODO: make this a function
    SeedHelper.tableDep[TableName].forEach(async (dependencyTable: string) => {
      if (tableRowIds[dependencyTable]) {
        isTableReady = isTableReady && true;
        // console.log(dependencyTable, " has rows");
      } else {
        isTableReady = isTableReady && false;
        // console.log(dependencyTable, " has no rows");
      }
    });
    console.log("All dependencies seeded?: ", isTableReady);
    if (isTableReady) {
      const count: number = await (unGuardedPrisma as any)[tableName].count(); // TODO: put in a try and catch
      console.log("Count before insertion: ", count);
      // await (unGuardedPrisma as any)[tableName].deleteMany();
      const size = 2000; // replace with your desired size
      const dataArray = await Promise.all(
        new Array(size).fill(null).map(async (data: Object) => {
          // console.log("starting an iteration");
          data = SeedHelper.functions["fake" + TableName + "Complete"]();
          await SeedHelper.fieldOverride(data);
          // console.log("ending an iteration");

          Object.keys(SeedHelper.tableRefs[TableName]).forEach((key) => {
            //   console.log("key: ", key);
            //   console.log("value: ", SeedHelper.tableRefs[TableName][key]);
            const array = tableRowIds[SeedHelper.tableRefs[TableName][key]];
            const randomIndex = Math.floor(Math.random() * array.length);
            data[key] = array[randomIndex]["id"];
          });

          Object.keys(data).forEach((key) => {
            if (Number.isInteger(data[key])) {
              if (data[key] > 2147483647 || data[key] < -2147483648) {
                // console.error(
                //   `Value ${data[key]} at key ${key} is too large for an INT4 field.`,
                // );
                data[key] = Math.floor(Math.random() * 2147483647);
                // console.info(`${key} is reassigned to ${data[key]}.`);
              }
            }
            if (Array.isArray(data[key])) {
              data[key] = data[key].map((value: number) => {
                if (Number.isInteger(value)) {
                  if (value > 2147483647 || value < -2147483648) {
                    // console.error(
                    //   `Value ${value} at key ${key} array is too large for an INT4 field.`,
                    // );
                    value = Math.floor(Math.random() * 2147483647);
                    // console.info(
                    //   `Element of ${key} is reassigned to ${value}.`,
                    // );
                  }
                }
                return value;
              });
            }
          });
          return data;
        }),
      );
      try {
        console.log("pushing data for ", TableName);
        const CreateResults = await (unGuardedPrisma as any)[
          tableName
        ].createMany({
          data: dataArray,
          skipDuplicates: true,
        });
        console.log(
          "Added ",
          CreateResults.count,
          " rows to ",
          TableName,
          " table",
        );
        tableRowIds[TableName] = await (unGuardedPrisma as any)[
          tableName
        ].findMany({
          select: { id: true },
        });
      } catch (error) {
        console.log(
          "Error with table ",
          tableName,
          "\nhere is the error:\n",
          error,
          "\nhere is the data:\n",
          dataArray,
        );
      }
    }
  }
}

console.log("completed seeding");
