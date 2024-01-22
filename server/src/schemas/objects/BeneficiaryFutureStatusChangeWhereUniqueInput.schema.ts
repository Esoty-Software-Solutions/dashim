import { z } from 'zod';
import { BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeWhereUniqueInput> =
  z
    .object({
      id: z.string().optional(),
      beneficiaryId_changeDate: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema = Schema;
