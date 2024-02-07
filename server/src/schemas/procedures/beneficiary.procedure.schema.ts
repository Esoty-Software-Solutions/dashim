import { z } from "zod";

const StatusSetByFields = {
  //* Using Prisma operation "include" includes all fields in the return type
  select: { id: true, firstName: true, lastName: true },
};

const SortOrderSchema = z.enum(["asc", "desc"]);

const BeneficiaryWhereInput = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  searchName: z.string().optional(),
  birthDate: z.coerce.date().optional(),
  genderId: z.string().optional(),
  residence: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  deactivationDate: z.coerce.date().optional().nullable(),
  statusSetById: z.string().optional(),
  subscriberId: z.string().optional(),
  legacyCode: z.string().optional().nullable(),
  relationshipId: z.string().optional(),
  isFingerprintVerificationActive: z.boolean().optional(),
  isIdCardVerificationActive: z.boolean().optional(),
  isFaceVerificationActive: z.boolean().optional(),
  isVoiceVerificationActive: z.boolean().optional(),
});

const SubscriberOrderByWithRelationInput = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    isPublished: SortOrderSchema.optional(),
    isActive: SortOrderSchema.optional(),
    deactivationDate: SortOrderSchema.optional(),
    statusSetById: SortOrderSchema.optional(),
    insurancePolicyId: SortOrderSchema.optional(),
    // StatusSetBy: z.object({}).optional(),
    // insurancePolicy: z.object({}).optional(),
    // beneficiaries: z.object({}).optional(),
    // futureStatus: z.object({}).optional(),
  })
  .strict();

const SubscriberWhereInput = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    statusSetById: z.string().optional(),
    insurancePolicyId: z.string().optional(),
    StatusSetBy: z
      .object({
        is: z
          .object({
            id: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
          })
          .optional(),
        isNot: z
          .object({
            id: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    // beneficiaries: z
    //   .object({
    //     every: z.object({}).optional(),
    //     some: z.object({}).optional(),
    //     none: z.object({}).optional(),
    //   })
    //   .optional(),
    // futureStatus: z.object({}).optional(),
  })
  .strict();

const ListBeneficiaryEntityInputSchema = z.object({
  where: SubscriberWhereInput,
  orderBy: SubscriberOrderByWithRelationInput,
  take: z.number(),
  skip: z.number(),
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
    residence: z.string().optional(),
    address: z.string().optional(),
    relationshipId: z.string(),
  })
  .strict();

const CreateBeneficiaryEntityInputSchema = z
  .object({
    data: z.object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isActive: z.boolean().optional(),
      insurancePolicyId: z.string(),
      beneficiaries: z.array(beneficiarySchema),
    }),
  })
  .strict();

export { ListBeneficiaryEntityInputSchema, CreateBeneficiaryEntityInputSchema };
