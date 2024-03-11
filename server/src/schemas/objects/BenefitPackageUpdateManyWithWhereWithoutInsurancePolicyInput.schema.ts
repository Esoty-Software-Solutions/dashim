import { z } from 'zod';
import { BenefitPackageScalarWhereInputObjectSchema } from './BenefitPackageScalarWhereInput.schema';
import { BenefitPackageUpdateManyMutationInputObjectSchema } from './BenefitPackageUpdateManyMutationInput.schema';
import { BenefitPackageUncheckedUpdateManyWithoutBenefitPackagesInputObjectSchema } from './BenefitPackageUncheckedUpdateManyWithoutBenefitPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpdateManyWithWhereWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => BenefitPackageScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BenefitPackageUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BenefitPackageUncheckedUpdateManyWithoutBenefitPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema =
  Schema;
