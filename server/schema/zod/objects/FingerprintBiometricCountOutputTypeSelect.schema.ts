/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCountOutputTypeSelect>;
export const FingerprintBiometricCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        entryRecords: z.boolean().optional(),
    })
    .strict() as SchemaType;
