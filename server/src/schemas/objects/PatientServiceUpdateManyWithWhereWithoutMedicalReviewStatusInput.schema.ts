import { z } from 'zod';
import { PatientServiceScalarWhereInputObjectSchema } from './PatientServiceScalarWhereInput.schema';
import { PatientServiceUpdateManyMutationInputObjectSchema } from './PatientServiceUpdateManyMutationInput.schema';
import { PatientServiceUncheckedUpdateManyWithoutMedicalPatientServicesInputObjectSchema } from './PatientServiceUncheckedUpdateManyWithoutMedicalPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateManyWithWhereWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientServiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateManyWithoutMedicalPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
