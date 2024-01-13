import { z } from 'zod';
import { PackageMedicalServicesScalarWhereInputObjectSchema } from './PackageMedicalServicesScalarWhereInput.schema';
import { PackageMedicalServicesUpdateManyMutationInputObjectSchema } from './PackageMedicalServicesUpdateManyMutationInput.schema';
import { PackageMedicalServicesUncheckedUpdateManyWithoutMedicalServicesInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateManyWithoutMedicalServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateManyWithWhereWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PackageMedicalServicesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateManyWithoutMedicalServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema =
  Schema;
