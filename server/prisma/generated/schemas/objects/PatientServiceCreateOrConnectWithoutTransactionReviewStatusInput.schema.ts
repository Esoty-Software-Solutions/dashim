import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceCreateWithoutTransactionReviewStatusInput.schema';
import { PatientServiceUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateOrConnectWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            PatientServiceCreateWithoutTransactionReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
