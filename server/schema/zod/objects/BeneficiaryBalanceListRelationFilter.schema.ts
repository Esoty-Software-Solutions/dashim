/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceWhereInputObjectSchema } from './BeneficiaryBalanceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceListRelationFilter>;
export const BeneficiaryBalanceListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema).optional(),
        some: z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema).optional(),
        none: z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
