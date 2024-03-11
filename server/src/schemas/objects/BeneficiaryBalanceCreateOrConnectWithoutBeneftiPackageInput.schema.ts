import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema =
  Schema;
