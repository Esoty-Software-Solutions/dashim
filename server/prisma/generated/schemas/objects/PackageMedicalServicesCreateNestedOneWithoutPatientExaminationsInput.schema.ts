import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesCreateWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateNestedOneWithoutPatientExaminationsInput> =
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
      connect: z
        .lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PackageMedicalServicesCreateNestedOneWithoutPatientExaminationsInputObjectSchema =
  Schema;
