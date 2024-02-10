import { z } from "zod";
import {
  StringFilterObjectSchema,
  StringNullableFilterObjectSchema,
  DateTimeFilterObjectSchema,
  DateTimeNullableFilterObjectSchema,
  NumberFilterObjectSchema,
  NumberNullableFilterObjectSchema,
} from "./_procedures.schema";

const StatusSetByFields = {
  //* Using Prisma operation "include" includes all fields in the return type
  select: { id: true, firstName: true, lastName: true },
};

const SortOrderSchema = z.enum(["asc", "desc"]);

const BeneficiaryEntityOrderByInput = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    isPublished: SortOrderSchema.optional(),
    isActive: SortOrderSchema.optional(),
    deactivationDate: SortOrderSchema.optional(),
    statusSetById: SortOrderSchema.optional(),
    StatusSetBy: z.object({}).optional(),
    insurancePolicyId: SortOrderSchema.optional(),
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
    beneficiaries: z
      .object({
        id: SortOrderSchema.optional(),
        firstName: SortOrderSchema.optional(),
        secondName: SortOrderSchema.optional(),
        thirdName: SortOrderSchema.optional(),
        fourthName: SortOrderSchema.optional(),
        lastName: SortOrderSchema.optional(),
        searchName: SortOrderSchema.optional(),
        birthDate: SortOrderSchema.optional(),
        genderId: SortOrderSchema.optional(),
        isActive: SortOrderSchema.optional(),
        deactivationDate: SortOrderSchema.optional(),
        statusSetById: SortOrderSchema.optional(),
        relationshipId: SortOrderSchema.optional(),
      })
      .optional(),
    futureStatus: z
      .object({
        changeDate: SortOrderSchema.optional(),
        futureStatus: SortOrderSchema.optional(),
      })
      .strict()
      .optional(),
  })
  .strict();

const BeneficiaryWhereInput = z
  .object({
    id: StringFilterObjectSchema.optional(),
    createdAt: DateTimeFilterObjectSchema.optional(),
    updatedAt: DateTimeFilterObjectSchema.optional(),
    searchName: StringFilterObjectSchema.optional(),
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

const BeneficiaryEntityWhereInput = z
  .object({
    id: StringFilterObjectSchema.optional(),
    createdAt: DateTimeFilterObjectSchema.optional(),
    updatedAt: DateTimeFilterObjectSchema.optional(),
    isActive: z.boolean().optional(),
    deactivationReason: StringNullableFilterObjectSchema.optional(),
    deactivationDate: DateTimeNullableFilterObjectSchema.optional(),
    statusSetById: StringFilterObjectSchema.optional(),
    StatusSetBy: z
      .object({
        id: StringFilterObjectSchema.optional(),
        firstName: StringFilterObjectSchema.optional(),
        lastName: StringFilterObjectSchema.optional(),
      })
      .strict()
      .optional(),
    insurancePolicyId: StringFilterObjectSchema.optional(),
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
    futureStatus: z
      .object({
        changeDate: DateTimeFilterObjectSchema.optional(),
        futureStatus: z.boolean().optional(),
      })
      .strict()
      .optional(),
  })
  .strict();

const ListBeneficiaryEntityInputSchema = z.object({
  where: BeneficiaryEntityWhereInput.optional(),
  orderBy: BeneficiaryEntityOrderByInput.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  // cursor: z.string().optional(),
});

const beneficiarySchema = z
  .object({
    id: z.string(),
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
        id: z.string(),
        insurancePolicyId: z.string(),
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

export {
  ListBeneficiaryEntityInputSchema,
  CreateBeneficiaryEntityInputSchema,
  UpdateBeneficiaryEntityInputSchema,
  UpdateBeneficiaryInputSchema,
};
