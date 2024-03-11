import { z } from 'zod';
import { BeneficiaryUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUpdateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithoutBeneficiaryBalancesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => BeneficiaryUpdateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
      ]),
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

export const BeneficiaryUpsertWithoutBeneficiaryBalancesInputObjectSchema =
  Schema;
