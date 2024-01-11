import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesCreateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesCreateWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateOrConnectWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesCreateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesCreateOrConnectWithoutBeneftiPackageInputObjectSchema =
  Schema;
