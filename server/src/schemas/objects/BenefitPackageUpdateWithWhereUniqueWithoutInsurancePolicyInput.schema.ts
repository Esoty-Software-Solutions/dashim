import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUpdateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpdateWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
