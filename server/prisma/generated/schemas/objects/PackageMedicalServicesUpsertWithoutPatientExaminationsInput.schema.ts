import { z } from 'zod';
import { PackageMedicalServicesUpdateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesUpdateWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesCreateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesCreateWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpsertWithoutPatientExaminationsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesUpdateWithoutPatientExaminationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateWithoutPatientExaminationsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesCreateWithoutPatientExaminationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpsertWithoutPatientExaminationsInputObjectSchema =
  Schema;
