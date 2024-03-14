/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUpdatephoneArrayInput>;
export const InstitutionUpdatephoneArrayInputObjectSchema: SchemaType = z
    .object({
        set: z.string().array().optional(),
        push: z.union([z.string(), z.string().array()]).optional(),
    })
    .strict() as SchemaType;
