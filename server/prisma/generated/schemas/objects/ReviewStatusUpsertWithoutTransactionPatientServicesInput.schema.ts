import { z } from 'zod';
import { ReviewStatusUpdateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusUpdateWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusUncheckedUpdateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusCreateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusCreateWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpsertWithoutTransactionPatientServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            ReviewStatusUpdateWithoutTransactionPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateWithoutTransactionPatientServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            ReviewStatusCreateWithoutTransactionPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpsertWithoutTransactionPatientServicesInputObjectSchema =
  Schema;
