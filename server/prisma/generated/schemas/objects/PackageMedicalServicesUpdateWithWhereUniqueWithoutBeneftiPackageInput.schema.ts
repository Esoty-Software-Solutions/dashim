import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUpdateWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateWithWhereUniqueWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema =
  Schema;
