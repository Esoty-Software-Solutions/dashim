/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumCountOutputTypeSelect>;
export const FingerTypeEnumCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        fingerType: z.boolean().optional(),
    })
    .strict() as SchemaType;
