import { z } from 'zod';
import { BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      createdById: z.string(),
      updatedById: z.string().optional().nullable(),
      transactionReviewStatusId: z.string(),
      beneficiaryService: z
        .lazy(
          () =>
            BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
