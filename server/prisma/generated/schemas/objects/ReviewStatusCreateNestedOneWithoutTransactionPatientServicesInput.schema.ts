import { z } from 'zod';
import { ReviewStatusCreateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusCreateWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusCreateOrConnectWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInput> =
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
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInputObjectSchema =
  Schema;
