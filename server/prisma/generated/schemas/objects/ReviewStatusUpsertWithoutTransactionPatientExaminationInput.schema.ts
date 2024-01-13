import { z } from 'zod';
import { ReviewStatusUpdateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusUpdateWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusUncheckedUpdateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusCreateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusCreateWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpsertWithoutTransactionPatientExaminationInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            ReviewStatusUpdateWithoutTransactionPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateWithoutTransactionPatientExaminationInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            ReviewStatusCreateWithoutTransactionPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpsertWithoutTransactionPatientExaminationInputObjectSchema =
  Schema;
