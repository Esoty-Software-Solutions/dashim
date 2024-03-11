/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterAvgAggregateInputType>;
export const MedicalCenterAvgAggregateInputObjectSchema: SchemaType = z
    .object({
        latitude: z.literal(true).optional(),
        longitude: z.literal(true).optional(),
    })
    .strict() as SchemaType;
