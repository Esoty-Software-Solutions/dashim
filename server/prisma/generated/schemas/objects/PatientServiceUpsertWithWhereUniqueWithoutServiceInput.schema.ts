import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutServiceInputObjectSchema } from './PatientServiceUpdateWithoutServiceInput.schema';
import { PatientServiceUncheckedUpdateWithoutServiceInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutServiceInput.schema';
import { PatientServiceCreateWithoutServiceInputObjectSchema } from './PatientServiceCreateWithoutServiceInput.schema';
import { PatientServiceUncheckedCreateWithoutServiceInputObjectSchema } from './PatientServiceUncheckedCreateWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpsertWithWhereUniqueWithoutServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PatientServiceUpdateWithoutServiceInputObjectSchema),
        z.lazy(
          () => PatientServiceUncheckedUpdateWithoutServiceInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => PatientServiceCreateWithoutServiceInputObjectSchema),
        z.lazy(
          () => PatientServiceUncheckedCreateWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpsertWithWhereUniqueWithoutServiceInputObjectSchema =
  Schema;
