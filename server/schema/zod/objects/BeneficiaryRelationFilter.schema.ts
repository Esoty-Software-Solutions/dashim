/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryRelationFilter>;
export const BeneficiaryRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
