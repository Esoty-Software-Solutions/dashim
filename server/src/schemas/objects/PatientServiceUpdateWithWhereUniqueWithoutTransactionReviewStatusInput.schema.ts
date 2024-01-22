import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUpdateWithoutTransactionReviewStatusInput.schema';
import { PatientServiceUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateWithWhereUniqueWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            PatientServiceUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
