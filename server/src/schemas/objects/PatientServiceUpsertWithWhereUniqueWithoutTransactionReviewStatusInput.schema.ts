import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUpdateWithoutTransactionReviewStatusInput.schema';
import { PatientServiceUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutTransactionReviewStatusInput.schema';
import { PatientServiceCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceCreateWithoutTransactionReviewStatusInput.schema';
import { PatientServiceUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpsertWithWhereUniqueWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            PatientServiceUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
      ]),
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

export const PatientServiceUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
