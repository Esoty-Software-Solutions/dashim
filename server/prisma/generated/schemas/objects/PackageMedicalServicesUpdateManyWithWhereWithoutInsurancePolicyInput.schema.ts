import { z } from 'zod';
import { PackageMedicalServicesScalarWhereInputObjectSchema } from './PackageMedicalServicesScalarWhereInput.schema';
import { PackageMedicalServicesUpdateManyMutationInputObjectSchema } from './PackageMedicalServicesUpdateManyMutationInput.schema';
import { PackageMedicalServicesUncheckedUpdateManyWithoutPackageMedicalServicesInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateManyWithoutPackageMedicalServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateManyWithWhereWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PackageMedicalServicesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateManyWithoutPackageMedicalServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema =
  Schema;
