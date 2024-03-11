import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeListRelationFilter> =
  z
    .object({
      every: z
        .lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema)
        .optional(),
      some: z
        .lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema)
        .optional(),
      none: z
        .lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema)
        .optional(),
    })
    .strict();

export const BeneficiaryFutureStatusChangeListRelationFilterObjectSchema =
  Schema;
