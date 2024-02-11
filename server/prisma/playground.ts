import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
// import { User } from "@models/user";
import { create } from "domain";
import cuid2 from "@paralleldrive/cuid2";
import { SeedHelper } from "../scripts/generateSeederFiles";
// import { Gender } from "../../app/server/models/gender.server";
// import { DeviceToken } from "../src/models/deviceToken";
// import { fakeDeviceToken } from "./fakeData/functions";
import * as enums from "./enumData";
// import { Institution } from "~/models/institution";
// import { SubscriberGroup } from "../../app/server/models/subscriberGroup.server";
// import { InsurancePolicy } from "~/models/insurancePolicy";
import { unGuardedPrisma } from "@config/db";

type Object = { [key: string]: any; id?: string };

await unGuardedPrisma.$connect();
console.info("unGuardedPrisma connected...");

try {
  console.info("creating enums...");
  await Promise.all([
    unGuardedPrisma.gender.createMany({
      data: enums.Gender,
      skipDuplicates: true,
    }),
    unGuardedPrisma.tenantType.createMany({
      data: enums.TenantType,
      skipDuplicates: true,
    }),
    unGuardedPrisma.role.createMany({ data: enums.Role, skipDuplicates: true }),
    unGuardedPrisma.deviceType.createMany({
      data: enums.DeviceType,
      skipDuplicates: true,
    }),
    unGuardedPrisma.relationship.createMany({
      data: enums.Relationship,
      skipDuplicates: true,
    }),
    unGuardedPrisma.fingerType.createMany({
      data: enums.FingerType,
      skipDuplicates: true,
    }),
    unGuardedPrisma.reviewStatus.createMany({
      data: enums.ReviewStatus,
      skipDuplicates: true,
    }),
    unGuardedPrisma.country.createMany({
      data: enums.Country,
      skipDuplicates: true,
    }),
  ]);
  console.info("enums created...");
} catch (e) {
  //! This will throw one error if multiple enums already exist
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === "P2002") {
      console.info("enums already exist...");
    } else {
      console.error(e);
    }
  } else {
    console.error(e);
  }
}

console.info("getting enums ids...");
// TODO: put these in an object
const genderIds = await unGuardedPrisma.gender.findMany({
  select: { id: true },
});
const tenantTypeIds = await unGuardedPrisma.tenantType.findMany({
  select: { id: true },
});
const roleIds = await unGuardedPrisma.role.findMany({ select: { id: true } });
const deviceTypeIds = await unGuardedPrisma.deviceType.findMany({
  select: { id: true },
});
const relationshipIds = await unGuardedPrisma.relationship.findMany({
  select: { id: true },
});
const relationship = await unGuardedPrisma.relationship.findMany({
  select: { id: true, name: true },
});
const relationshipObject: { [key: string]: string } = relationship.reduce(
  (obj, item) => {
    return {
      ...obj,
      [item.name]: item.id,
    };
  },
  {},
);
const fingerTypeIds = await unGuardedPrisma.fingerType.findMany({
  select: { id: true },
});
console.info("enums ids accumulated...");

function getRandomId(objArr: Object[]) {
  return objArr[Math.floor(Math.random() * objArr.length)].id;
}

SeedHelper.sortedTable.forEach(async (table) => {});

// async function createFakeUser(obj: Object) {
//   const data = {
//     ...SeedHelper.functions.fakeUserComplete(),
//     ...obj,
//   };
//   // console.log('user before\n', user)
//   await SeedHelper.fieldOverride(data);
//   // console.log('user after\n', user)
//   return data;
// }

// async function createFakeDeviceToken(userId: string, deviceTypeId: string) {
//   const data: Prisma.DeviceTokenCreateManyInput = {
//     ...SeedHelper.functions.fakeDeviceTokenComplete(),
//     userId,
//     deviceTypeId,
//     id: cuid2.createId(),
//     createdAt: new Date(),
//   };
//   // console.log('user before\n', data)
//   await SeedHelper.fieldOverride(data);
//   // console.log('user after\n', data)
//   return data;
// }

// async function addUsers(count: number) {
//   const probability = 0.9;
//   console.log(
//     "adding ",
//     count,
//     " users with device tokens",
//     probability * 100,
//     "% of the time...",
//   );
//   const users: Prisma.UserCreateManyInput[] = [];
//   const deviceTokens: Prisma.DeviceTokenCreateManyInput[] = [];
//   users.push({
//     ...(await createFakeUser({ genderId: getRandomId(genderIds) })),
//     username: "aaa",
//     email: "aaa@a.com",
//     passwordHash: await bcrypt.hash("123", 10),
//   }); // fake static user
//   for (let i = 0; i < count; i++) {
//     const genderId = genderIds[Math.floor(Math.random() * genderIds.length)].id;
//     const deviceTypeId =
//       deviceTypeIds[Math.floor(Math.random() * deviceTypeIds.length)].id;
//     // console.log('genderId', genderId)
//     const user = await createFakeUser({ genderId });
//     users.push(user);
//     if (Math.random() > 0.9) continue; // 10% chance to not create device token
//     const deviceToken = await createFakeDeviceToken(user.id, deviceTypeId);
//     deviceTokens.push(deviceToken);
//   }
//   // TODO: make the prisma actions below a transaction
//   console.log("starting the prisma calls...");
//   await unGuardedPrisma.user.createMany({ data: users });
//   await unGuardedPrisma.deviceToken.createMany({ data: deviceTokens });
//   console.log("done...");
// }

// async function createFakeInstitution() {
//   const data: Prisma.InstitutionCreateManyInput = {
//     ...SeedHelper.functions.fakeInstitutionComplete(),
//     id: cuid2.createId(),
//     createdAt: new Date(),
//   };
//   // console.log('user before\n', data)
//   await SeedHelper.fieldOverride(data);
//   // console.log('user after\n', data)
//   return data;
// }

async function createFakeBeneficiaryEntity(
  institutionId: string,
  insurancePolicyId: string,
) {
  const data: Prisma.BeneficiaryEntityCreateManyInput = {
    ...SeedHelper.functions.fakeBeneficiaryEntityComplete(),
    id: cuid2.createId(),
    createdAt: new Date(),
    institutionId,
    insurancePolicyId,
  };
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data);
  // console.log('user after\n', data)
  return data;
}

// async function createFakeSubscriberGroup(
//   genderIds: string,
//   subscriberId: string,
//   relationshipId: string,
// ) {
//   const data: Prisma.SubscriberGroupCreateManyInput = {
//     ...SeedHelper.functions.fakeSubscriberGroupComplete(),
//     id: cuid2.createId(),
//     createdAt: new Date(),
//     genderId: genderIds,
//     subscriberId: subscriberId,
//     relationshipId,
//   };
//   // console.log('user before\n', data)
//   await SeedHelper.fieldOverride(data);
//   // console.log('user after\n', data)
//   return data;
// }

// async function createFakeTenant() {
//   const data: Prisma.TenantCreateManyInput = {
//     ...SeedHelper.functions.fakeTenantComplete(),
//     id: cuid2.createId(),
//     createdAt: new Date(),
//   };
//   // console.log('user before\n', data)
//   await SeedHelper.fieldOverride(data);
//   // console.log('user after\n', data)
//   return data;
// }

// async function createFakeInsurancePolicy(institutionId: string) {
//   const data: Prisma.InsurancePolicyCreateManyInput = {
//     ...SeedHelper.functions.fakeInsurancePolicyComplete(),
//     id: cuid2.createId(),
//     createdAt: new Date(),
//     institutionId,
//   };
//   // console.log('user before\n', data)
//   await SeedHelper.fieldOverride(data);
//   // console.log('user after\n', data)
//   return data;
// }

// async function addInstitutions(
//   institutionCount: number,
//   SubscriberAverageCount: number,
//   maxSubscriberGroupSize: number = 10,
// ) {
//   const probability = 0.9;
//   console.log(
//     "adding ",
//     institutionCount,
//     " institutions with",
//     SubscriberAverageCount,
//     "subscribers each with a max group size of ",
//     maxSubscriberGroupSize,
//     "...",
//   );
//   const institutions: Prisma.InstitutionCreateManyInput[] = [];
//   const subscribers: Prisma.SubscriberCreateManyInput[] = [];
//   const subscribersGroups: Prisma.SubscriberGroupCreateManyInput[] = [];
//   const tenants: Prisma.TenantCreateManyInput[] = [];
//   const insurancePolicys: Prisma.InsurancePolicyCreateManyInput[] = [];
//   for (let i = 0; i < institutionCount; i++) {
//     const institution = await createFakeInstitution();
//     institutions.push(institution);
//     const insurancePolicy = await createFakeInsurancePolicy(institution.id);
//     insurancePolicys.push(insurancePolicy);
//     // const tenant = await SeedHelper.functions.fakeTenantComplete()
//     // tenants.push(tenant)
//     for (let k = 0; k < SubscriberAverageCount; k++) {
//       // console.log('subscriber', k)
//       const subscriber = await createFakeSubscriber(
//         institution.id,
//         insurancePolicy.id,
//       );
//       subscribers.push(subscriber);
//       const subscriberGroupCount = Math.ceil(
//         Math.pow(Math.random(), 2.5) * maxSubscriberGroupSize,
//       );
//       let relationshipCopy = [...relationship];
//       let relationshipId;
//       for (let j = 0; j < subscriberGroupCount; j++) {
//         // console.log('subscriberGroup', j)
//         const genderId =
//           genderIds[Math.floor(Math.random() * genderIds.length)].id;

//         const selfRelationShipId = relationshipObject["self"];
//         if (j === 0) {
//           relationshipId = relationshipObject["self"];
//           // Remove 'self' from relationshipCopy
//           // console.log(
//           //   'relationshipCopy  length before',
//           //   relationshipCopy.length,
//           //   '\n',
//           //   relationshipCopy
//           // )
//           relationshipCopy = relationshipCopy.filter(
//             (item) => item.name !== "self",
//           );
//           // console.log(
//           //   'relationshipCopy  length after',
//           //   relationshipCopy.length,
//           //   '\n',
//           //   relationshipCopy
//           // )
//         } else {
//           relationshipId =
//             relationshipCopy[
//               Math.floor(Math.random() * relationshipCopy.length)
//             ].id;
//           if (relationshipId === selfRelationShipId) {
//             console.error("self relationship is repeated");
//           }
//         }
//         const subscriberGroup = await createFakeSubscriberGroup(
//           genderId,
//           subscriber.id,
//           relationshipId,
//         );
//         subscribersGroups.push(subscriberGroup);
//       }
//     }

//     if (Math.random() > 0.9) continue; // 10% chance to not create device token
//   }
//   // TODO: make the prisma actions below a transaction
//   console.log("starting the prisma calls...");
//   // await unGuardedPrisma.tenant.createMany({ data: tenants })
//   await unGuardedPrisma.institution.createMany({ data: institutions });
//   await unGuardedPrisma.insurancePolicy.createMany({ data: insurancePolicys });
//   await unGuardedPrisma.subscriber.createMany({ data: subscribers });
//   await unGuardedPrisma.subscriberGroup.createMany({ data: subscribersGroups });
//   console.log("done...");
// }

// // TODO: add timer to see how long it takes to run
// await addUsers(1500);
// await addInstitutions(10, 10000, 13);
