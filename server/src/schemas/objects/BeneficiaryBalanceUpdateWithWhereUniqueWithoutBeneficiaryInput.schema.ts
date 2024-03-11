import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUpdateWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => BeneficiaryBalanceUpdateWithoutBeneficiaryInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryBalanceUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
