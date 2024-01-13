import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutServiceInputObjectSchema } from './PatientServiceUpdateWithoutServiceInput.schema';
import { PatientServiceUncheckedUpdateWithoutServiceInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateWithWhereUniqueWithoutServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientServiceUpdateWithoutServiceInputObjectSchema),
        z.lazy(
          () => PatientServiceUncheckedUpdateWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpdateWithWhereUniqueWithoutServiceInputObjectSchema =
  Schema;
