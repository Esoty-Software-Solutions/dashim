import { PrismaClient } from "@prisma/client";
import { enhance } from "@zenstackhq/runtime";
import { init, isCuid } from "@paralleldrive/cuid2";
import { warn } from "console";

// The init function returns a custom createId function with the specified
// configuration. All configuration properties are optional.
const createId = init({
  // A custom random function with the same API as Math.random.
  // You can use this to pass a cryptographically secure random function.
  random: Math.random,
  // the length of the id
  length: 10,
  // A custom fingerprint for the host environment. This is used to help
  // prevent collisions when generating ids in a distributed system.
  fingerprint: "a-custom-host-fingerprint",
});

// Hard-code a unique key, so we can look up the client when this module gets re-imported
const unGuardedPrisma = new PrismaClient({
  // log: ['query', 'info', 'warn', 'error'],
  errorFormat: "pretty",
}).$extends({
  // model: {
  //   $allModels: {
  //     async getTableName<T>(this: T) {
  //       const context = Prisma.getExtensionContext(this) as any
  //       return (prisma as any)._runtimeDataModel.models[context.name].dbName
  //     },
  //   },
  // },
  // query: {
  // $allModels: {
  //   async create({ model, operation, args, query }) {
  //     // check if id exists and is valid cuid
  //     // TODO: Test this with createMany
  //     // console.log("CUID2 check: ", args.data.id);
  //     if (!args.data.id || isCuid(args.data.id)) {
  //       // console.log("CUID2: Adding cuid2 to data");
  //       args.data.id = createId();
  //     }
  //     return query(args);
  //   },
  //   async createMany({ model, operation, args, query }) {
  //     if (Array.isArray(args.data)) {
  //       args.data.map((entry) => {
  //         // console.log("CUID2 check: ", entry.id);
  //         if (!entry.id || !isCuid(entry.id)) {
  //           // console.log("CUID2: Adding cuid2 to array data");
  //           entry.id = createId();
  //         }
  //       });
  //     } else {
  //       if (!args.data.id || !isCuid(args.data.id)) {
  //         // console.log("CUID2: Adding cuid2 to data");
  //         args.data.id = createId();
  //       }
  //     }
  //     return query(args);
  //   },
  // },
  // beneficiary: {
  //   async create({ model, operation, args, query }) {
  //     // check if id exists and is valid cuid
  //     // TODO: Test this with createMany
  //     args.data.searchName =
  //       (args.data.firstName || "") +
  //       (args.data.secondName || "") +
  //       (args.data.thirdName || "") +
  //       (args.data.fourthName || "") +
  //       (args.data.lastName || "");
  //     return query(args);
  //   },
  //   async createMany({ model, operation, args, query }) {
  //     if (Array.isArray(args.data)) {
  //       args.data.forEach((entry) => {
  //         entry.searchName =
  //           (entry.firstName || "") +
  //           (entry.secondName || "") +
  //           (entry.thirdName || "") +
  //           (entry.fourthName || "") +
  //           (entry.lastName || "");
  //       });
  //     } else {
  //       args.data.searchName =
  //         (args.data.firstName || "") +
  //         (args.data.secondName || "") +
  //         (args.data.thirdName || "") +
  //         (args.data.fourthName || "") +
  //         (args.data.lastName || "");
  //     }
  //     return query(args);
  //   },
  // },
  // },
});

unGuardedPrisma.$connect();

function enhancedPrisma(userId?: string) {
  if (!userId) {
    console.log(warn("userId provided to enhancedPrisma is null"));
    return enhance(
      unGuardedPrisma,
      {},
      // { logPrismaQuery: true }
    );
  }
  return enhance(
    unGuardedPrisma,
    { user: { id: userId } },
    // { logPrismaQuery: true }
  );
}

export { unGuardedPrisma, enhancedPrisma };
