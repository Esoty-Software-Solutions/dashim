/* eslint-disable */
import { z } from 'zod';
import { EntryRecordUncheckedCreateNestedManyWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricUncheckedCreateWithoutBeneficiaryInput>;
export const VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema: SchemaType = z
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
        entryRecords: z
            .lazy(() => EntryRecordUncheckedCreateNestedManyWithoutVoiceBiometricInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
