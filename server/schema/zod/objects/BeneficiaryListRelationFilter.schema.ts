/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryListRelationFilter>;
export const BeneficiaryListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        some: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        none: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
