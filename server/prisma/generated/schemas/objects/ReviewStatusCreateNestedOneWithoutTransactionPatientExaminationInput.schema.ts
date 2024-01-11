import { z } from 'zod';
import { ReviewStatusCreateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusCreateWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusCreateOrConnectWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateNestedOneWithoutTransactionPatientExaminationInput> =
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
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ReviewStatusCreateNestedOneWithoutTransactionPatientExaminationInputObjectSchema =
  Schema;
