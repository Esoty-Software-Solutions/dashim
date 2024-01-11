import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUpdateWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationCreateWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpsertWithWhereUniqueWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            PatientExaminationUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            PatientExaminationCreateWithoutTransactionReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
