import { z } from 'zod';
import { ReviewStatusUpdateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusUpdateWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusUncheckedUpdateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusCreateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusCreateWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpsertWithoutMedicalPatientExaminationInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            ReviewStatusUpdateWithoutMedicalPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateWithoutMedicalPatientExaminationInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            ReviewStatusCreateWithoutMedicalPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpsertWithoutMedicalPatientExaminationInputObjectSchema =
  Schema;
