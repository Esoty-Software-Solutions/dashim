import { z } from 'zod';
import { PackageMedicalServicesUpdateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesUpdateWithoutPatientServicesInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutPatientServicesInput.schema';
import { PackageMedicalServicesCreateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesCreateWithoutPatientServicesInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpsertWithoutPatientServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesUpdateWithoutPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateWithoutPatientServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesCreateWithoutPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedCreateWithoutPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpsertWithoutPatientServicesInputObjectSchema =
  Schema;
