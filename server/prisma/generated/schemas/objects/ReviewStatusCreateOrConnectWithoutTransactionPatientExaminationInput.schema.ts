import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusCreateWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutTransactionPatientExaminationInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
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

export const ReviewStatusCreateOrConnectWithoutTransactionPatientExaminationInputObjectSchema =
  Schema;
