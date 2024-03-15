/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeListRelationFilter>;
export const BeneficiaryEntityFutureStatusChangeListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema).optional(),
        some: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema).optional(),
        none: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
