import { z } from 'zod';
import { UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusUpdatesInput.schema';
import { BeneficiaryServiceCreateNestedOneWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateNestedOneWithoutReviewStatusInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateWithoutCreatedByInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    UpdatedBy: z
      .lazy(
        () => UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema,
      )
      .optional(),
    beneficiaryService: z
      .lazy(
        () =>
          BeneficiaryServiceCreateNestedOneWithoutReviewStatusInputObjectSchema,
      )
      .optional(),
    transactionReviewStatus: z.lazy(
      () =>
        ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema,
    ),
    medicalReviewStatus: z.lazy(
      () =>
        ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema,
    ),
  })
  .strict();

export const ReviewStatusCreateWithoutCreatedByInputObjectSchema = Schema;
