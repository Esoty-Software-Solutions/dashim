import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesCreateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesCreateWithoutPatientServicesInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateOrConnectWithoutPatientServicesInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
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

export const PackageMedicalServicesCreateOrConnectWithoutPatientServicesInputObjectSchema =
  Schema;
