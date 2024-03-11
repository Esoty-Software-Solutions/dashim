import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInput> =
  z
    .object({
      where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema =
  Schema;
