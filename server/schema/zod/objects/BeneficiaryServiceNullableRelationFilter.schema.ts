/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereInputObjectSchema } from './BeneficiaryServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceNullableRelationFilter>;
export const BeneficiaryServiceNullableRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z
            .union([z.lazy(() => BeneficiaryServiceWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        isNot: z
            .union([z.lazy(() => BeneficiaryServiceWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
    })
    .strict() as SchemaType;
