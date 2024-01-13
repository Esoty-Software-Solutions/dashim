import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUpdateWithoutMedicalReviewStatusInput.schema';
import { PatientServiceUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateWithWhereUniqueWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => PatientServiceUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
