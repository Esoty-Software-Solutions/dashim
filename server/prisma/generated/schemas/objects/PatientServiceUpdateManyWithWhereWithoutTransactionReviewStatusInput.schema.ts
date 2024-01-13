import { z } from 'zod';
import { PatientServiceScalarWhereInputObjectSchema } from './PatientServiceScalarWhereInput.schema';
import { PatientServiceUpdateManyMutationInputObjectSchema } from './PatientServiceUpdateManyMutationInput.schema';
import { PatientServiceUncheckedUpdateManyWithoutTransactionPatientServicesInputObjectSchema } from './PatientServiceUncheckedUpdateManyWithoutTransactionPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateManyWithWhereWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientServiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateManyWithoutTransactionPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
