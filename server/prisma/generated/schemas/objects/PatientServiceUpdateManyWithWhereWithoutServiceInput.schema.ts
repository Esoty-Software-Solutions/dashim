import { z } from 'zod';
import { PatientServiceScalarWhereInputObjectSchema } from './PatientServiceScalarWhereInput.schema';
import { PatientServiceUpdateManyMutationInputObjectSchema } from './PatientServiceUpdateManyMutationInput.schema';
import { PatientServiceUncheckedUpdateManyWithoutPatientServicesInputObjectSchema } from './PatientServiceUncheckedUpdateManyWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateManyWithWhereWithoutServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientServiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateManyWithoutPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpdateManyWithWhereWithoutServiceInputObjectSchema =
  Schema;
