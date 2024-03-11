import { z } from 'zod';
import { BeneficiaryBalanceScalarWhereInputObjectSchema } from './BeneficiaryBalanceScalarWhereInput.schema';
import { BeneficiaryBalanceUpdateManyMutationInputObjectSchema } from './BeneficiaryBalanceUpdateManyMutationInput.schema';
import { BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceUpdateManyWithWhereWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryBalanceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryBalanceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryBalancesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryBalanceUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema =
  Schema;
