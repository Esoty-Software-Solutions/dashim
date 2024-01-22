import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInput> =
  z
    .object({
      beneficiaryId: z.string(),
      changeDate: z.coerce.date(),
    })
    .strict();

export const BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInputObjectSchema =
  Schema;
