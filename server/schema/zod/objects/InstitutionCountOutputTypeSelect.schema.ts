/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionCountOutputTypeSelect>;
export const InstitutionCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        policies: z.boolean().optional(),
        MedicalCenterPricing: z.boolean().optional(),
    })
    .strict() as SchemaType;
