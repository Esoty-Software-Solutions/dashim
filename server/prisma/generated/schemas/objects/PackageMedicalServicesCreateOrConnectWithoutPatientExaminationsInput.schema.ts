import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesCreateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesCreateWithoutPatientExaminationsInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutPatientExaminationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateOrConnectWithoutPatientExaminationsInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
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

export const PackageMedicalServicesCreateOrConnectWithoutPatientExaminationsInputObjectSchema =
  Schema;
