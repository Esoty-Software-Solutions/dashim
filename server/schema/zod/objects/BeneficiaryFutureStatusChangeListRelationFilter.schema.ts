/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeListRelationFilter>;
export const BeneficiaryFutureStatusChangeListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema).optional(),
        some: z.lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema).optional(),
        none: z.lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
