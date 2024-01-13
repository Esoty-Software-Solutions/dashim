import { z } from 'zod';
import { PatientExaminationScalarWhereInputObjectSchema } from './PatientExaminationScalarWhereInput.schema';
import { PatientExaminationUpdateManyMutationInputObjectSchema } from './PatientExaminationUpdateManyMutationInput.schema';
import { PatientExaminationUncheckedUpdateManyWithoutMedicalPatientExaminationInputObjectSchema } from './PatientExaminationUncheckedUpdateManyWithoutMedicalPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateManyWithWhereWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientExaminationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateManyWithoutMedicalPatientExaminationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
