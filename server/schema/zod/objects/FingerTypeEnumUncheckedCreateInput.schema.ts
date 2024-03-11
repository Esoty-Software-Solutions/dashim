/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricUncheckedCreateNestedManyWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedCreateNestedManyWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumUncheckedCreateInput>;
export const FingerTypeEnumUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.union([z.string(), z.null()]).optional().nullable(),
        english: z.union([z.string(), z.null()]).optional().nullable(),
        name: z.string(),
        fingerType: z
            .lazy(() => FingerprintBiometricUncheckedCreateNestedManyWithoutFingerTypeInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
