/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCountOutputTypeSelect>;
export const MedicalCenterCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        services: z.boolean().optional(),
        insurancePolicy: z.boolean().optional(),
        entryRecords: z.boolean().optional(),
    })
    .strict() as SchemaType;
