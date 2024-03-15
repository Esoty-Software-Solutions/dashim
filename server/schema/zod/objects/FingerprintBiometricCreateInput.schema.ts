/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumCreateNestedOneWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateNestedOneWithoutFingerTypeInput.schema';
import { BeneficiaryCreateNestedOneWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutFingerprintInput.schema';
import { EntryRecordCreateNestedManyWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateNestedManyWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCreateInput>;
export const FingerprintBiometricCreateInputObjectSchema: SchemaType = z
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
        beneficiary: z.lazy(() => BeneficiaryCreateNestedOneWithoutFingerprintInputObjectSchema),
        entryRecords: z.lazy(() => EntryRecordCreateNestedManyWithoutFingerprintBiometricInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
