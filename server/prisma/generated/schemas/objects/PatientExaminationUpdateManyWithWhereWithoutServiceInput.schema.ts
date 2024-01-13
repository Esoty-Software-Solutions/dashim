import { z } from 'zod';
import { PatientExaminationScalarWhereInputObjectSchema } from './PatientExaminationScalarWhereInput.schema';
import { PatientExaminationUpdateManyMutationInputObjectSchema } from './PatientExaminationUpdateManyMutationInput.schema';
import { PatientExaminationUncheckedUpdateManyWithoutPatientExaminationsInputObjectSchema } from './PatientExaminationUncheckedUpdateManyWithoutPatientExaminationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateManyWithWhereWithoutServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientExaminationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateManyWithoutPatientExaminationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpdateManyWithWhereWithoutServiceInputObjectSchema =
  Schema;
