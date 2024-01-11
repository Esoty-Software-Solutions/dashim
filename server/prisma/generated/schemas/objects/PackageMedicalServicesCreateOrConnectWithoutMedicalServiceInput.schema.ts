import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesCreateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesCreateWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateOrConnectWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesCreateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesCreateOrConnectWithoutMedicalServiceInputObjectSchema =
  Schema;
