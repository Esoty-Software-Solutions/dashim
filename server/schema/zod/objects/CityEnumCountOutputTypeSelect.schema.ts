/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCountOutputTypeSelect>;
export const CityEnumCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        institutions: z.boolean().optional(),
        medicalcenters: z.boolean().optional(),
        beneficiaryEntities: z.boolean().optional(),
    })
    .strict() as SchemaType;
