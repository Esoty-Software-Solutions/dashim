import { z } from 'zod';
import { BeneficiaryBalanceCreateManyBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateManyBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => BeneficiaryBalanceCreateManyBeneftiPackageInputObjectSchema,
        ),
        z
          .lazy(
            () => BeneficiaryBalanceCreateManyBeneftiPackageInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema =
  Schema;
