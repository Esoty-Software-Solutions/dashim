import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeListRelationFilter> =
  z
    .object({
      every: z
        .lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema)
        .optional(),
      some: z
        .lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema)
        .optional(),
      none: z
        .lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema)
        .optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeListRelationFilterObjectSchema =
  Schema;
