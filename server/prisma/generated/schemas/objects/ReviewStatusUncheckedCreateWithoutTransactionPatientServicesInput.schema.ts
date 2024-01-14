import { z } from 'zod';
import { PatientServiceUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInput> =
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
      medicalPatientServices: z
        .lazy(
          () =>
            PatientServiceUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInputObjectSchema =
  Schema;
