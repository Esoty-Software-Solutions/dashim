import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesCreateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesCreateWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateOrConnectWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
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

export const PackageMedicalServicesCreateOrConnectWithoutInsurancePolicyInputObjectSchema =
  Schema;
