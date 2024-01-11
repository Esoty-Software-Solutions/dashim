import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUpdateWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateWithWhereUniqueWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            PatientExaminationUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
