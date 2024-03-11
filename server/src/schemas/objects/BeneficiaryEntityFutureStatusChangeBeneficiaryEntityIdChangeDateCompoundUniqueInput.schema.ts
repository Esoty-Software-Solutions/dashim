import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeBeneficiaryEntityIdChangeDateCompoundUniqueInput> =
  z
    .object({
      beneficiaryEntityId: z.string(),
      changeDate: z.coerce.date(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeBeneficiaryEntityIdChangeDateCompoundUniqueInputObjectSchema =
  Schema;
