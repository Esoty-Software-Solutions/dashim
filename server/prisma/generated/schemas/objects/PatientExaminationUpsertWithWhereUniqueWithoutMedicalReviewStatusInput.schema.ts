import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUpdateWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationCreateWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpsertWithWhereUniqueWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            PatientExaminationUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            PatientExaminationCreateWithoutMedicalReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
