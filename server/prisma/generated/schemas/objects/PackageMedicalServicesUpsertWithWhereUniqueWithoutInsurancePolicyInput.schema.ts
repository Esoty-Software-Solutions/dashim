import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUpdateWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesCreateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesCreateWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpsertWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesCreateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
