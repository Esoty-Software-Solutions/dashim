/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryCountOutputTypeSelect>;
export const MedicalServiceCategoryCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        beneftiPackages: z.boolean().optional(),
        services: z.boolean().optional(),
    })
    .strict() as SchemaType;
