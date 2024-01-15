import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryBalanceCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
