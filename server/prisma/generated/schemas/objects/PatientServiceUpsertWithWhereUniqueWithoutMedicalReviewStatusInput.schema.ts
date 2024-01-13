import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUpdateWithoutMedicalReviewStatusInput.schema';
import { PatientServiceUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutMedicalReviewStatusInput.schema';
import { PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceCreateWithoutMedicalReviewStatusInput.schema';
import { PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpsertWithWhereUniqueWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => PatientServiceUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
      ]),
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

export const PatientServiceUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
