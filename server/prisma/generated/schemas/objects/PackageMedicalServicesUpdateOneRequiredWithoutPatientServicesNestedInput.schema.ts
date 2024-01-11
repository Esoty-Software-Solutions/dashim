import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesCreateWithoutPatientServicesInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutPatientServicesInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutPatientServicesInput.schema';
import { PackageMedicalServicesUpsertWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesUpsertWithoutPatientServicesInput.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesUpdateWithoutPatientServicesInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateOneRequiredWithoutPatientServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesCreateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              PackageMedicalServicesUncheckedCreateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            PackageMedicalServicesCreateOrConnectWithoutPatientServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            PackageMedicalServicesUpsertWithoutPatientServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesUpdateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              PackageMedicalServicesUncheckedUpdateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PackageMedicalServicesUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema =
  Schema;
