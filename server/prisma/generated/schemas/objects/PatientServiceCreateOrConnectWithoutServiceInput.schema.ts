import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceCreateWithoutServiceInputObjectSchema } from './PatientServiceCreateWithoutServiceInput.schema';
import { PatientServiceUncheckedCreateWithoutServiceInputObjectSchema } from './PatientServiceUncheckedCreateWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateOrConnectWithoutServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PatientServiceCreateWithoutServiceInputObjectSchema),
        z.lazy(
          () => PatientServiceUncheckedCreateWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceCreateOrConnectWithoutServiceInputObjectSchema =
  Schema;
