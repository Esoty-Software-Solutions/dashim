/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FloatFieldUpdateOperationsInput>;
export const FloatFieldUpdateOperationsInputObjectSchema: SchemaType = z
    .object({
        set: z.number().optional(),
        increment: z.number().optional(),
        decrement: z.number().optional(),
        multiply: z.number().optional(),
        divide: z.number().optional(),
    })
    .strict() as SchemaType;
