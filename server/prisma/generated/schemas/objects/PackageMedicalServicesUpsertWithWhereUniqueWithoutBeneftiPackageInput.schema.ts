import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUpdateWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesCreateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesCreateWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpsertWithWhereUniqueWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
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

export const PackageMedicalServicesUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema =
  Schema;
