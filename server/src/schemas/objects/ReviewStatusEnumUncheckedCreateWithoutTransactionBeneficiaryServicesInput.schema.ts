import { z } from 'zod';
import { ReviewStatusUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateNestedManyWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInput> =
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
            ReviewStatusUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema =
  Schema;
