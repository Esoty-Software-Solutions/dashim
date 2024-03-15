/* eslint-disable */
import { z } from 'zod';
import { CurrencyEnumSelectObjectSchema } from './CurrencyEnumSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CurrencyEnumArgs>;
export const CurrencyEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => CurrencyEnumSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
