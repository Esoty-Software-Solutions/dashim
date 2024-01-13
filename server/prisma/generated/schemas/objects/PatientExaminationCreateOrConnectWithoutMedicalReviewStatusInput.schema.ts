import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationCreateWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateOrConnectWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
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

export const PatientExaminationCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
