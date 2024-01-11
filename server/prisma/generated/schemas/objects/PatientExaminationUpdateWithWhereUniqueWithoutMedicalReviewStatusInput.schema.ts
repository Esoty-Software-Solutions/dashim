import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUpdateWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateWithWhereUniqueWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            PatientExaminationUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
