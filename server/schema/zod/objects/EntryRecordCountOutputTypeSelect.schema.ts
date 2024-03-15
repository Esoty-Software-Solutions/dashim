/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCountOutputTypeSelect>;
export const EntryRecordCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        beneficiaryServices: z.boolean().optional(),
    })
    .strict() as SchemaType;
