import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceCreateWithoutMedicalReviewStatusInput.schema';
import { PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateOrConnectWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
