import * as functions from "../prisma/fakeData/functions";
import { SeedHelper } from "../scripts/generateSeederFiles";
import { unGuardedPrisma } from "@config/db";
import { type Prisma } from "@prisma/client";
import { User } from "@models/user";
import { Gender } from "../src/models/gender";

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

console.log("SortedTables############\n", SeedHelper.sortedTable);
// console.log("tableDep############\n", SeedHelper.tableDep);
// console.log("tableRefs###########\n", SeedHelper.tableRefs);

// export type Functions<T = any> = {
//   [key: string]: T;
// };

// const prismaFunctions: Functions<string> = {
//   myFunction: () => "Hello, world!",
// };

const CreateManyFunctions = {
  Country: unGuardedPrisma.country.createMany,
  City: unGuardedPrisma.city.createMany,
  Gender: unGuardedPrisma.gender.createMany,
  User: unGuardedPrisma.user.createMany,
  TenantType: unGuardedPrisma.tenantType.createMany,
  Tenant: unGuardedPrisma.tenant.createMany,
  TenantMembers: unGuardedPrisma.tenantMembers.createMany,
  DeviceType: unGuardedPrisma.deviceType.createMany,
  DeviceToken: unGuardedPrisma.deviceToken.createMany,
  Institution: unGuardedPrisma.institution.createMany,
  InsurancePolicy: unGuardedPrisma.insurancePolicy.createMany,
  Subscriber: unGuardedPrisma.subscriber.createMany,
  Relationship: unGuardedPrisma.relationship.createMany,
  Beneficiary: unGuardedPrisma.beneficiary.createMany,
  MedicalCenter: unGuardedPrisma.medicalCenter.createMany,
  MedicalServiceTemplate: unGuardedPrisma.medicalServiceTemplate.createMany,
  MedicalService: unGuardedPrisma.medicalService.createMany,
  InstitutionMedicalService:
    unGuardedPrisma.institutionMedicalService.createMany,
  FingerType: unGuardedPrisma.fingerType.createMany,
  FingerprintBiometric: unGuardedPrisma.fingerprintBiometric.createMany,
  IDCard: unGuardedPrisma.idCard.createMany,
  FaceBiometric: unGuardedPrisma.faceBiometric.createMany,
  VoiceBiometric: unGuardedPrisma.voiceBiometric.createMany,
  BenefitPackage: unGuardedPrisma.benefitPackage.createMany,
  InsurancePolicyMedicalCenter:
    unGuardedPrisma.insurancePolicyMedicalCenter.createMany,
  BenefitPackageMedicalServiceTemplate:
    unGuardedPrisma.benefitPackageMedicalServiceTemplate.createMany,
  EntryRecord: unGuardedPrisma.entryRecord.createMany,
  ReviewStatus: unGuardedPrisma.reviewStatus.createMany,
  PatientService: unGuardedPrisma.patientService.createMany,
  BeneficiaryBalance: unGuardedPrisma.beneficiaryBalance.createMany,
};

for (const TableName of SeedHelper.sortedTable) {
  if (TableName in SeedHelper.tableDep) {
    // console.log(TableName, ":", SeecdHelper.tableDep[TableName]);
  } else {
    console.log(TableName, ":", "no dependencies");
    const functionName: string = "fake" + TableName + "Complete";
    const a = SeedHelper.functions[functionName]();
    await SeedHelper.fieldOverride(a);
    console.log(functionName, ": ", a);
    // const a = await prismaFunctions[TableName].count();
    const b = await prismaFunctions["dfs"];
  }
}
