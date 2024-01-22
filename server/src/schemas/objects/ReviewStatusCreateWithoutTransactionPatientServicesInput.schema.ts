import { z } from 'zod';
import { PatientServiceCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceCreateNestedManyWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateWithoutTransactionPatientServicesInput> =
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
            PatientServiceCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusCreateWithoutTransactionPatientServicesInputObjectSchema =
  Schema;
