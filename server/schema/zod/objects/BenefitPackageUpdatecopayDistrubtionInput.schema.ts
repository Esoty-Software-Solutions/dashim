/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUpdatecopayDistrubtionInput>;
export const BenefitPackageUpdatecopayDistrubtionInputObjectSchema: SchemaType = z
    .object({
        set: z.number().array().optional(),
        push: z.union([z.number(), z.number().array()]).optional(),
    })
    .strict() as SchemaType;
