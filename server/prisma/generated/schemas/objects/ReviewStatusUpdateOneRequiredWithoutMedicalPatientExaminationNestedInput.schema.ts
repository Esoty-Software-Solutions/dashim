import { z } from 'zod';
import { ReviewStatusCreateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusCreateWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusCreateOrConnectWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusUpsertWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusUpsertWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusUpdateWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusUncheckedUpdateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutMedicalPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateOneRequiredWithoutMedicalPatientExaminationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ReviewStatusCreateWithoutMedicalPatientExaminationInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ReviewStatusCreateOrConnectWithoutMedicalPatientExaminationInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            ReviewStatusUpsertWithoutMedicalPatientExaminationInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ReviewStatusUpdateWithoutMedicalPatientExaminationInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedUpdateWithoutMedicalPatientExaminationInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ReviewStatusUpdateOneRequiredWithoutMedicalPatientExaminationNestedInputObjectSchema =
  Schema;
