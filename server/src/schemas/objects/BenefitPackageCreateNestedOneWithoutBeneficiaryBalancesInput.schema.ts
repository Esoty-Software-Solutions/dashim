import { z } from 'zod';
import { BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema =
  Schema;
