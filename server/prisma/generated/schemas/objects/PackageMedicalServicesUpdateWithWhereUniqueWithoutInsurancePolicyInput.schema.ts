import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUpdateWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
