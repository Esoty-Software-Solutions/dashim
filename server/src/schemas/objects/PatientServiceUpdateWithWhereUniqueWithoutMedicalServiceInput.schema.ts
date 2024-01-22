import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutMedicalServiceInputObjectSchema } from './PatientServiceUpdateWithoutMedicalServiceInput.schema';
import { PatientServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateWithWhereUniqueWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => PatientServiceUpdateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema =
  Schema;
