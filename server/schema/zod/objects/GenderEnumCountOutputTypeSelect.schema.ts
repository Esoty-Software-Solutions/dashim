/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumCountOutputTypeSelect>;
export const GenderEnumCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        user: z.boolean().optional(),
        beneficiary: z.boolean().optional(),
    })
    .strict() as SchemaType;
