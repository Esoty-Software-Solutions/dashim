import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationCreateWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateOrConnectWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
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

export const PatientExaminationCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
