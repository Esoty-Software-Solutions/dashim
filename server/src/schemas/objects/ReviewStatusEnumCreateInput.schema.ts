import { z } from 'zod';
import { ReviewStatusCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateNestedManyWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateNestedManyWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    transactionBeneficiaryServices: z
      .lazy(
        () =>
          ReviewStatusCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema,
      )
      .optional(),
    medicalBeneficiaryServices: z
      .lazy(
        () =>
          ReviewStatusCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ReviewStatusEnumCreateInputObjectSchema = Schema;
