import { z } from 'zod';
import { ReviewStatusCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateNestedManyWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      arabic: z.string().optional().nullable(),
      english: z.string().optional().nullable(),
      name: z.string(),
      medicalBeneficiaryServices: z
        .lazy(
          () =>
            ReviewStatusCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema =
  Schema;
