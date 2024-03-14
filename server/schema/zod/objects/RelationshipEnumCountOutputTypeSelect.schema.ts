/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumCountOutputTypeSelect>;
export const RelationshipEnumCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        beneficiary: z.boolean().optional(),
    })
    .strict() as SchemaType;
