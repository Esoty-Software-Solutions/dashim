import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusCreateWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutTransactionPatientServicesInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
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

export const ReviewStatusCreateOrConnectWithoutTransactionPatientServicesInputObjectSchema =
  Schema;
