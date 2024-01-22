import { z } from 'zod';
import { ReviewStatusCreateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusCreateWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusCreateOrConnectWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusUpsertWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusUpsertWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusUpdateWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusUncheckedUpdateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutTransactionPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateOneRequiredWithoutTransactionPatientServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ReviewStatusCreateWithoutTransactionPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ReviewStatusCreateOrConnectWithoutTransactionPatientServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            ReviewStatusUpsertWithoutTransactionPatientServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ReviewStatusUpdateWithoutTransactionPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedUpdateWithoutTransactionPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ReviewStatusUpdateOneRequiredWithoutTransactionPatientServicesNestedInputObjectSchema =
  Schema;
