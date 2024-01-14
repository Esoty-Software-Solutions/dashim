import { z } from 'zod';
import { BeneficiaryBalanceScalarWhereInputObjectSchema } from './BeneficiaryBalanceScalarWhereInput.schema';
import { BeneficiaryBalanceUpdateManyMutationInputObjectSchema } from './BeneficiaryBalanceUpdateManyMutationInput.schema';
import { BeneficiaryBalanceUncheckedUpdateManyWithoutSpentsInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateManyWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceUpdateManyWithWhereWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryBalanceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryBalanceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryBalanceUncheckedUpdateManyWithoutSpentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryBalanceUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema =
  Schema;
