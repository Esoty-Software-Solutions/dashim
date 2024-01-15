import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceCreateWithoutMedicalServiceInputObjectSchema } from './PatientServiceCreateWithoutMedicalServiceInput.schema';
import { PatientServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './PatientServiceUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateOrConnectWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => PatientServiceCreateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema =
  Schema;
