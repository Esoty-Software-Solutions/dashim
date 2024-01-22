import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutMedicalServiceInputObjectSchema } from './PatientServiceUpdateWithoutMedicalServiceInput.schema';
import { PatientServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutMedicalServiceInput.schema';
import { PatientServiceCreateWithoutMedicalServiceInputObjectSchema } from './PatientServiceCreateWithoutMedicalServiceInput.schema';
import { PatientServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './PatientServiceUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpsertWithWhereUniqueWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => PatientServiceUpdateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
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

export const PatientServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema =
  Schema;
