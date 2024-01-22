import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceUpdateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUpdateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => BeneficiaryBalanceUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema =
  Schema;
