/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricCountOutputTypeSelect>;
export const VoiceBiometricCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        entryRecords: z.boolean().optional(),
    })
    .strict() as SchemaType;
