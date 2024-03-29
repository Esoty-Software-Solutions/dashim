/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.StringFieldUpdateOperationsInput>;
export const StringFieldUpdateOperationsInputObjectSchema: SchemaType = z
    .object({
        set: z.string().optional(),
    })
    .strict() as SchemaType;
