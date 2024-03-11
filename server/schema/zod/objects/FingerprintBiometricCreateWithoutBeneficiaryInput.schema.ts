/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumCreateNestedOneWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateNestedOneWithoutFingerTypeInput.schema';
import { EntryRecordCreateNestedManyWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateNestedManyWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCreateWithoutBeneficiaryInput>;
export const FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        record: z.string(),
        fingerType: z.lazy(() => FingerTypeEnumCreateNestedOneWithoutFingerTypeInputObjectSchema),
        entryRecords: z.lazy(() => EntryRecordCreateNestedManyWithoutFingerprintBiometricInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
