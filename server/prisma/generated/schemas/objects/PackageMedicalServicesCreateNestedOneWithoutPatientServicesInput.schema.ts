import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesCreateWithoutPatientServicesInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutPatientServicesInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutPatientServicesInput.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateNestedOneWithoutPatientServicesInput> =
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
      connect: z
        .lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PackageMedicalServicesCreateNestedOneWithoutPatientServicesInputObjectSchema =
  Schema;
