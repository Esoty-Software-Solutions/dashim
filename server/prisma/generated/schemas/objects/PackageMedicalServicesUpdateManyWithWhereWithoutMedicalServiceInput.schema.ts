import { z } from 'zod';
import { PackageMedicalServicesScalarWhereInputObjectSchema } from './PackageMedicalServicesScalarWhereInput.schema';
import { PackageMedicalServicesUpdateManyMutationInputObjectSchema } from './PackageMedicalServicesUpdateManyMutationInput.schema';
import { PackageMedicalServicesUncheckedUpdateManyWithoutBeneftiPackagesInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateManyWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateManyWithWhereWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PackageMedicalServicesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateManyWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema =
  Schema;
