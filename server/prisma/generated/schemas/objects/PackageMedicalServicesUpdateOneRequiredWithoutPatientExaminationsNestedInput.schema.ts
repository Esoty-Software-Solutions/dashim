import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesCreateWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesUpsertWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesUpsertWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesUpdateWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutPatientExaminationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateOneRequiredWithoutPatientExaminationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesCreateWithoutPatientExaminationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            PackageMedicalServicesCreateOrConnectWithoutPatientExaminationsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            PackageMedicalServicesUpsertWithoutPatientExaminationsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesUpdateWithoutPatientExaminationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              PackageMedicalServicesUncheckedUpdateWithoutPatientExaminationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PackageMedicalServicesUpdateOneRequiredWithoutPatientExaminationsNestedInputObjectSchema =
  Schema;
