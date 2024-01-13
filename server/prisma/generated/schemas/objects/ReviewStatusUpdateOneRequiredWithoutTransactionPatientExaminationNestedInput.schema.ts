import { z } from 'zod';
import { ReviewStatusCreateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusCreateWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusCreateOrConnectWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusUpsertWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusUpsertWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusUpdateWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusUncheckedUpdateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutTransactionPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateOneRequiredWithoutTransactionPatientExaminationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ReviewStatusCreateWithoutTransactionPatientExaminationInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ReviewStatusCreateOrConnectWithoutTransactionPatientExaminationInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            ReviewStatusUpsertWithoutTransactionPatientExaminationInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ReviewStatusUpdateWithoutTransactionPatientExaminationInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedUpdateWithoutTransactionPatientExaminationInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ReviewStatusUpdateOneRequiredWithoutTransactionPatientExaminationNestedInputObjectSchema =
  Schema;
