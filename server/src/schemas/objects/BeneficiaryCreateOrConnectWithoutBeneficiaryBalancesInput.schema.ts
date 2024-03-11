import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema =
  Schema;
