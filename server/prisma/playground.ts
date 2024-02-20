import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
// import { User } from "@models/user";
import { create } from "domain";
import cuid2 from "@paralleldrive/cuid2";
import { SeedHelper } from "../scripts/generateSeederFiles";
// import { Gender } from "../../app/server/models/gender.server";
// import { DeviceToken } from "../src/models/deviceToken";
// import { fakeDeviceToken, fakeBeneficiary } from './fakeData/functions';
import * as enums from "./enumData";
// import { Institution } from "~/models/institution";
// import { Beneficiary } from "../../app/server/models/beneficiary.server";
// import { InsurancePolicy } from "~/models/insurancePolicy";
import { unGuardedPrisma } from "@config/db";

type Object = { [key: string]: any; id: string };

await unGuardedPrisma.$connect();
console.info("unGuardedPrisma connected...");

export async function EnumSeed() {
  try {
    console.info("creating enums...");
    await Promise.all([
      unGuardedPrisma.genderEnum.createMany({
        data: enums.Gender,
        skipDuplicates: true,
      }),
      unGuardedPrisma.tenantTypeEnum.createMany({
        data: enums.TenantType,
        skipDuplicates: true,
      }),
      unGuardedPrisma.roleEnum.createMany({
        data: enums.Role,
        skipDuplicates: true,
      }),
      unGuardedPrisma.deviceTypeEnum.createMany({
        data: enums.DeviceType,
        skipDuplicates: true,
      }),
      unGuardedPrisma.relationshipEnum.createMany({
        data: enums.Relationship,
        skipDuplicates: true,
      }),
      unGuardedPrisma.fingerTypeEnum.createMany({
        data: enums.FingerType,
        skipDuplicates: true,
      }),
      unGuardedPrisma.reviewStatusEnum.createMany({
        data: enums.ReviewStatus,
        skipDuplicates: true,
      }),
      unGuardedPrisma.countryEnum.createMany({
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
}

console.info("getting enums ids...");
// TODO: put these in an object
// const genderIds = await unGuardedPrisma.genderEnum.findMany({
//   select: { id: true },
// });
// const tenantTypeIds = await unGuardedPrisma.tenantTypeEnum.findMany({
//   select: { id: true },
// });
// const roleIds = await unGuardedPrisma.roleEnum.findMany({
//   select: { id: true },
// });
// const deviceTypeIds = await unGuardedPrisma.deviceTypeEnum.findMany({
//   select: { id: true },
// });
// const relationshipIds = await unGuardedPrisma.relationshipEnum.findMany({
//   select: { id: true },
// });
// const relationship = await unGuardedPrisma.relationshipEnum.findMany({
//   select: { id: true, name: true },
// });
// const relationshipObject: { [key: string]: string } = relationship.reduce(
//   (obj, item) => {
//     return {
//       ...obj,
//       [item.name]: item.id,
//     };
//   },
//   {},
// );
// const fingerTypeIds = await unGuardedPrisma.fingerTypeEnum.findMany({
//   select: { id: true },
// });

// const cityIds = await unGuardedPrisma.cityEnum.findMany({
//   select: { id: true },
// });

// const userIds = await unGuardedPrisma.user.findMany({
//   select: { id: true },
// });
console.info("enums ids accumulated...");

function getRandomId(objArr: Object[]): string {
  return objArr[Math.floor(Math.random() * objArr.length)].id;
}

// async function createFakeUser(obj: Object) {
//   const data = {
//     ...SeedHelper.functions.fakeUserComplete(),
//     ...obj,
//   };
//   // console.log('user before\n', user)
//   await SeedHelper.fieldOverride(data, { tableName: "User" });
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
//   await SeedHelper.fieldOverride(data , { tableName: "DeviceToken" });
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

async function createFakeInstitution(cityId: string) {
  const data: Prisma.InstitutionCreateManyInput = {
    ...SeedHelper.functions.fakeInstitutionComplete(),
    id: cuid2.createId(),
    createdAt: new Date(),
    cityId,
  };
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data, { tableName: "Institution" });
  // console.log('user after\n', data)
  return data;
}

async function createFakeBeneficiaryEntity(
  insurancePolicyId: string,
  cityId: string,
  userId: string,
) {
  const data: Prisma.BeneficiaryEntityCreateManyInput = {
    ...SeedHelper.functions.fakeBeneficiaryEntityComplete(),
    id: cuid2.createId(),
    createdAt: new Date(),
    insurancePolicyId,
    cityId,
    statusSetById: userId,
  };
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data, { tableName: "BeneficiaryEntity" });
  // console.log('user after\n', data)
  return data;
}

async function createFakeBeneficiary(
  genderId: string,
  beneficiaryEntityId: string,
  relationshipId: string,
  userId: string,
) {
  const data: Prisma.BeneficiaryUncheckedCreateInput = {
    ...SeedHelper.functions.fakeBeneficiaryComplete(),
    id: cuid2.createId(),
    createdAt: new Date(),
    genderId,
    beneficiaryEntityId,
    relationshipId,
    statusSetById: userId,
  };
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data, { tableName: "Beneficiary" });
  // console.log('user after\n', data)
  return data;
}

async function createFakeTenant({
  typeId,
  ownerId,
}: {
  typeId: string;
  ownerId: string;
}) {
  const data: Prisma.TenantCreateManyInput = {
    ...SeedHelper.functions.fakeTenantComplete(),
    id: cuid2.createId(),
    typeId,
    ownerId,
  };
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data, { tableName: "Tenant" });
  // console.log('user after\n', data)
  return data;
}

async function createFakeInsurancePolicy(institutionId: string) {
  const data: Prisma.InsurancePolicyCreateManyInput = {
    ...SeedHelper.functions.fakeInsurancePolicyComplete(),
    id: cuid2.createId(),
    institutionId,
  };
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data, { tableName: "InsurancePolicy" });
  // console.log('user after\n', data)
  return data;
}

async function createFakeMedicalCenter({
  cityId,
  managingTenantId,
}: {
  cityId: string;
  managingTenantId: string;
}) {
  const data: Prisma.MedicalCenterCreateManyInput = {
    ...SeedHelper.functions.fakeMedicalCenterComplete(),
    id: cuid2.createId(),
    cityId,
    managingTenantId,
  };
  await SeedHelper.fieldOverride(data, { tableName: "MedicalCenter" });
  return data;
}

async function createFakeMedicalService({
  categoryId,
  medicalCenterId,
}: {
  categoryId: string;
  medicalCenterId: string;
}) {
  const data: Prisma.MedicalServiceCreateManyInput = {
    ...SeedHelper.functions.fakeMedicalServiceComplete(),
    id: cuid2.createId(),
    categoryId,
    medicalCenterId,
  };
  await SeedHelper.fieldOverride(data, { tableName: "MedicalService" });
  return data;
}

async function addMedicalCenters(
  medicalCenterCount: number,
  medicalServiceCount: number,
) {
  console.log(
    "adding ",
    medicalCenterCount,
    " medicalCenters with",
    medicalServiceCount,
    "medicalServices each...",
  );
  const medicalCenters: Prisma.MedicalCenterCreateManyInput[] = [];
  const tenants: Prisma.TenantCreateManyInput[] = [];
  const categoryIds = await unGuardedPrisma.medicalServiceCategory.findMany({
    select: { id: true },
  });
  const cityIds = await unGuardedPrisma.cityEnum.findMany({
    select: { id: true },
  });
  const typeIds = await unGuardedPrisma.tenantTypeEnum.findMany({
    select: { id: true },
  });
  const ownerIds = await unGuardedPrisma.user.findMany({
    select: { id: true },
  });
  for (let i = 0; i < medicalCenterCount; i++) {
    const medicalServices: Prisma.MedicalServiceCreateManyInput[] = [];
    const cityId = getRandomId(cityIds);
    const tenant = await createFakeTenant({
      typeId: getRandomId(typeIds),
      ownerId: getRandomId(ownerIds),
    });
    tenants.push(tenant);
    const medicalCenter = await createFakeMedicalCenter({
      cityId,
      managingTenantId: tenant.id,
    });
    medicalCenters.push(medicalCenter);
    for (let k = 0; k < medicalServiceCount; k++) {
      const categoryId = getRandomId(categoryIds);
      const medicalService = await createFakeMedicalService({
        categoryId,
        medicalCenterId: medicalCenter.id,
      });
      medicalServices.push(medicalService);
    }
    const insertTenant = unGuardedPrisma.tenant.createMany({ data: tenant });
    const insertMedicalCenter = unGuardedPrisma.medicalCenter.createMany({
      data: medicalCenter,
    });
    const insertMedicalServices = unGuardedPrisma.medicalService.createMany({
      data: medicalServices,
    });
    await unGuardedPrisma.$transaction([
      insertTenant,
      insertMedicalCenter,
      insertMedicalServices,
    ]);
  }
}

async function addInstitutions(
  institutionCount: number,
  BeneficiaryEntityAverageCount: number,
  maxBeneficiarySize: number = 10,
) {
  const probability = 0.9;
  console.log(
    "adding ",
    institutionCount,
    " institutions with",
    BeneficiaryEntityAverageCount,
    "beneficiaryEntities each with a max group size of ",
    maxBeneficiarySize,
    "...",
  );
  const institutions: Prisma.InstitutionCreateManyInput[] = [];
  const tenants: Prisma.TenantCreateManyInput[] = [];

  const cityIds = await unGuardedPrisma.cityEnum.findMany({
    select: { id: true },
  });
  const userIds = await unGuardedPrisma.user.findMany({
    select: { id: true },
  });
  const genderIds = await unGuardedPrisma.genderEnum.findMany({
    select: { id: true },
  });
  const relationship = await unGuardedPrisma.relationshipEnum.findMany({
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
  for (let i = 0; i < institutionCount; i++) {
    const beneficiaryEntities: Prisma.BeneficiaryEntityCreateManyInput[] = [];
    const insurancePolicies: Prisma.InsurancePolicyCreateManyInput[] = [];
    const beneficiaries: Prisma.BeneficiaryCreateManyInput[] = [];

    const institution = await createFakeInstitution(getRandomId(cityIds));

    institutions.push(institution);
    const insurancePolicy = await createFakeInsurancePolicy(institution.id);
    insurancePolicies.push(insurancePolicy);
    // const tenant = await SeedHelper.functions.fakeTenantComplete()
    // tenants.push(tenant)
    for (let k = 0; k < BeneficiaryEntityAverageCount; k++) {
      // console.log('beneficiaryEntity', k)
      const beneficiaryEntity = await createFakeBeneficiaryEntity(
        insurancePolicy.id,
        getRandomId(cityIds),
        getRandomId(userIds),
      );
      beneficiaryEntities.push(beneficiaryEntity);
      const beneficiaryCount = Math.ceil(
        Math.pow(Math.random(), 2.5) * maxBeneficiarySize,
      );
      let relationshipCopy = [...relationship];
      let relationshipId;
      for (let j = 0; j < beneficiaryCount; j++) {
        // console.log('beneficiary', j)
        const genderId = getRandomId(genderIds);
        const userId = getRandomId(userIds);

        const selfRelationShipId = relationshipObject["self"];
        if (j === 0) {
          relationshipId = relationshipObject["self"];
          // Remove 'self' from relationshipCopy
          // console.log(
          //   'relationshipCopy  length before',
          //   relationshipCopy.length,
          //   '\n',
          //   relationshipCopy
          // )
          relationshipCopy = relationshipCopy.filter(
            (item) => item.name !== "self",
          );
          // console.log(
          //   'relationshipCopy  length after',
          //   relationshipCopy.length,
          //   '\n',
          //   relationshipCopy
          // )
        } else {
          relationshipId =
            relationshipCopy[
              Math.floor(Math.random() * relationshipCopy.length)
            ].id;
          if (relationshipId === selfRelationShipId) {
            console.error("self relationship is repeated");
          }
        }
        const beneficiary = await createFakeBeneficiary(
          genderId,
          beneficiaryEntity.id,
          relationshipId,
          userId,
        );
        beneficiaries.push(beneficiary);
      }
    }
    const insertInstitution = unGuardedPrisma.institution.createMany({
      data: institution,
    });
    const insertInsurancePolicies = unGuardedPrisma.insurancePolicy.createMany({
      data: insurancePolicies,
    });
    const insertBeneficiaryEntities =
      unGuardedPrisma.beneficiaryEntity.createMany({
        data: beneficiaryEntities,
      });
    const insertBeneficiaries = unGuardedPrisma.beneficiary.createMany({
      data: beneficiaries,
    });
    await unGuardedPrisma.$transaction([
      insertInstitution,
      insertInsurancePolicies,
      insertBeneficiaryEntities,
      insertBeneficiaries,
    ]);
  }
  // TODO: make the prisma actions below a transaction
  console.log("starting the prisma calls...");
  // await unGuardedPrisma.tenant.createMany({ data: tenants })

  console.log("done...");
}

// TODO: add timer to see how long it takes to run
// await addUsers(1500);
// await addInstitutions(2, 50000, 13);

export const customSeeder = [
  { key: "Institution", seed: () => addInstitutions(4, 55000, 13) },
  { key: "MedicalCenter", seed: () => addMedicalCenters(5, 1500) },
];
