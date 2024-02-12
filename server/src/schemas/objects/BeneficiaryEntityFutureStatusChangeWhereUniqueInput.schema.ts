import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeBeneficiaryEntityIdChangeDateCompoundUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeBeneficiaryEntityIdChangeDateCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeWhereUniqueInput> =
  z
    .object({
      id: z.string().optional(),
      beneficiaryEntityId: z.string().optional(),
      beneficiaryEntityId_changeDate: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeBeneficiaryEntityIdChangeDateCompoundUniqueInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema =
  Schema;
