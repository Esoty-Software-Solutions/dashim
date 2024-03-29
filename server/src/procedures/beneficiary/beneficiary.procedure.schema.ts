import { z } from "zod";
import { Prisma } from "@prisma/client";
import {
  StringFilterObjectSchema,
  StringNullableFilterObjectSchema,
  StringInsensitiveFilterObjectSchema,
  StringInsensitiveNullableFilterObjectSchema,
  DateTimeFilterObjectSchema,
  DateTimeNullableFilterObjectSchema,
  NumberFilterObjectSchema,
  NumberNullableFilterObjectSchema,
  SortOrderSchema,
} from "@procedures/_schemas";

const BeneficiaryEntityOrderByInput = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    isPublished: SortOrderSchema.optional(),
    isActive: SortOrderSchema.optional(),
    deactivationDate: SortOrderSchema.optional(),
    statusSetById: SortOrderSchema.optional(),
    insurancePolicyId: SortOrderSchema.optional(),
    StatusSetBy: z
      .object({
        id: SortOrderSchema.optional(),
        firstName: SortOrderSchema.optional(),
        lastName: SortOrderSchema.optional(),
      })
      .strict()
      .optional(),
    insurancePolicy: z
      .object({
        id: SortOrderSchema.optional(),
        name: SortOrderSchema.optional(),
        institutionId: SortOrderSchema.optional(),
        institution: z
          .object({
            id: SortOrderSchema.optional(),
            name: SortOrderSchema.optional(),
          })
          .strict()
          .optional(),
      })
      .strict()
      .optional(),
    // beneficiaries: z
    //   .object({
    //     id: SortOrderSchema.optional(),
    //     firstName: SortOrderSchema.optional(),
    //     secondName: SortOrderSchema.optional(),
    //     thirdName: SortOrderSchema.optional(),
    //     fourthName: SortOrderSchema.optional(),
    //     lastName: SortOrderSchema.optional(),
    //     searchName: SortOrderSchema.optional(),
    //     birthDate: SortOrderSchema.optional(),
    //     genderId: SortOrderSchema.optional(),
    //     isActive: SortOrderSchema.optional(),
    //     deactivationDate: SortOrderSchema.optional(),
    //     statusSetById: SortOrderSchema.optional(),
    //     relationshipId: SortOrderSchema.optional(),
    //   })
    //   .strict()
    //   .optional(),
    // futureStatus: z
    //   .object({
    //     changeDate: SortOrderSchema.optional(),
    //     futureStatus: SortOrderSchema.optional(),
    //   })
    //   .strict()
    //   .optional(),
  })
  .strict();

const BeneficiaryWhereInput = z
  .object({
    id: StringFilterObjectSchema.optional(),
    createdAt: DateTimeFilterObjectSchema.optional(),
    updatedAt: DateTimeFilterObjectSchema.optional(),
    searchName: StringInsensitiveFilterObjectSchema.optional(),
    birthDate: DateTimeFilterObjectSchema.optional(),
    genderId: StringFilterObjectSchema.optional(),
    residence: StringFilterObjectSchema.optional().nullable(),
    isActive: z.boolean().optional(),
    deactivationDate: DateTimeNullableFilterObjectSchema.optional(),
    statusSetById: StringFilterObjectSchema.optional(),
    subscriberId: StringFilterObjectSchema.optional(),
    legacyCode: StringNullableFilterObjectSchema.optional(),
    relationshipId: StringFilterObjectSchema.optional(),
    isFingerprintVerificationActive: z.boolean().optional(),
    isIdCardVerificationActive: z.boolean().optional(),
    isFaceVerificationActive: z.boolean().optional(),
    isVoiceVerificationActive: z.boolean().optional(),
  })
  .strict();

// const BeneficiaryEntityWhereInput: z.ZodType<Prisma.BeneficiaryEntityWhereInput> =
const BeneficiaryEntityWhereInput = z
  .object({
    // AND: z
    //   .union([
    //     z.lazy(() => BeneficiaryEntityWhereInput),
    //     z.lazy(() => BeneficiaryEntityWhereInput).array(),
    //   ])
    //   .optional(),
    // OR: z
    //   .lazy(() => BeneficiaryEntityWhereInput)
    //   .array()
    //   .optional(),
    // NOT: z
    //   .union([
    //     z.lazy(() => BeneficiaryEntityWhereInput),
    //     z.lazy(() => BeneficiaryEntityWhereInput).array(),
    //   ])
    // .optional(),
    id: StringFilterObjectSchema.optional(),
    createdAt: DateTimeFilterObjectSchema.optional(),
    updatedAt: DateTimeFilterObjectSchema.optional(),
    isActive: z.boolean().optional(),
    deactivationReason: StringNullableFilterObjectSchema.optional(),
    deactivationDate: DateTimeNullableFilterObjectSchema.optional(),
    cityId: StringFilterObjectSchema.optional(),
    statusSetById: StringFilterObjectSchema.optional(),
    insurancePolicyId: StringFilterObjectSchema.optional(),
    StatusSetBy: z
      .object({
        id: StringFilterObjectSchema.optional(),
        firstName: StringFilterObjectSchema.optional(),
        lastName: StringFilterObjectSchema.optional(),
      })
      .strict()
      .optional(),
    insurancePolicy: z
      .object({
        id: StringFilterObjectSchema.optional(),
        name: StringFilterObjectSchema.optional(),
        institutionId: StringFilterObjectSchema.optional(),
        institution: z
          .object({
            id: StringFilterObjectSchema.optional(),
            name: StringFilterObjectSchema.optional(),
          })
          .strict()
          .optional(),
      })
      .strict()
      .optional(),
    beneficiaries: z
      .object({
        every: BeneficiaryWhereInput.optional(),
        some: BeneficiaryWhereInput.optional(),
        none: BeneficiaryWhereInput.optional(),
      })
      .strict()
      .optional(),
    // futureStatus: z
    //   .object({
    //     changeDate: DateTimeFilterObjectSchema.optional(),
    //     futureStatus: z.boolean().optional(),
    //   })
    //   .strict()
    //   .optional(),
  })
  .strict();

const ListBeneficiaryEntityInputSchema = z
  .object({
    where: BeneficiaryEntityWhereInput.optional(),
    orderBy: BeneficiaryEntityOrderByInput.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    // cursor: z.string().optional(),
  })
  .strict();

const beneficiarySchema = z
  .object({
    id: z.string().cuid2(),
    firstName: z.string(),
    secondName: z.string().optional(),
    thirdName: z.string().optional(),
    fourthName: z.string().optional(),
    lastName: z.string(),
    birthDate: z.coerce.date(),
    genderId: z.string(),
    nationality: z.string().optional(),
    nationalID: z.string().optional(),
    relationshipId: z.string(),
  })
  .strict();

const CreateBeneficiaryEntityInputSchema = z
  .object({
    data: z
      .object({
        id: z.string().cuid2(),
        insurancePolicyId: z.string(),
        cityId: z.string(),
        beneficiaries: z.array(beneficiarySchema),
      })
      .strict(),
  })
  .strict();

const UpdateBeneficiaryEntityInputSchema = z
  .object({
    where: BeneficiaryEntityWhereInput.optional(),
    data: z
      .object({
        insurancePolicyId: z.string().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.string().optional(),
      })
      .strict(),
  })
  .strict();

const UpdateBeneficiaryInputSchema = z
  .object({
    where: BeneficiaryWhereInput.optional(),
    data: z
      .object({
        firstName: z.string(),
        secondName: z.string().optional(),
        thirdName: z.string().optional(),
        fourthName: z.string().optional(),
        lastName: z.string(),
        birthDate: z.coerce.date(),
        genderId: z.string(),
        nationality: z.string().optional(),
        nationalID: z.string().optional(),
        relationshipId: z.string(),
      })
      .strict(),
  })
  .strict();

// beneficiarySchema

const CreateBeneficiaryInputSchema = z
  .object({
    data: z
      .object({
        id: z.string().cuid2(),
        firstName: z.string(),
        secondName: z.string().optional(),
        thirdName: z.string().optional(),
        fourthName: z.string().optional(),
        lastName: z.string(),
        birthDate: z.coerce.date(),
        genderId: z.string(),
        nationality: z.string().optional(),
        nationalID: z.string().optional(),
        relationshipId: z.string(),
        // isActive: z.boolean().optional(),
        beneficiaryEntityId: z.string(),
      })
      .strict(),
  })
  .strict();

export {
  ListBeneficiaryEntityInputSchema,
  CreateBeneficiaryEntityInputSchema,
  UpdateBeneficiaryEntityInputSchema,
  UpdateBeneficiaryInputSchema,
  CreateBeneficiaryInputSchema,
};
