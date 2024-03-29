/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BoolFieldUpdateOperationsInput>;
export const BoolFieldUpdateOperationsInputObjectSchema: SchemaType = z
    .object({
        set: z.boolean().optional(),
    })
    .strict() as SchemaType;
