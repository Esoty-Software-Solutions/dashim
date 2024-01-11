import { z } from 'zod';
import { PatientExaminationScalarWhereInputObjectSchema } from './PatientExaminationScalarWhereInput.schema';
import { PatientExaminationUpdateManyMutationInputObjectSchema } from './PatientExaminationUpdateManyMutationInput.schema';
import { PatientExaminationUncheckedUpdateManyWithoutTransactionPatientExaminationInputObjectSchema } from './PatientExaminationUncheckedUpdateManyWithoutTransactionPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateManyWithWhereWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientExaminationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateManyWithoutTransactionPatientExaminationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
