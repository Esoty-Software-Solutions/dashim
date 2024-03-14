/* eslint-disable */
import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { BeneficiaryServiceUncheckedCreateNestedManyWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedManyWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())]),
);

type SchemaType = z.ZodType<Prisma.EntryRecordUncheckedCreateWithoutUpdatedByInput>;
export const EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        createdById: z.string(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        isValidated: z.boolean(),
        isManuallyInserted: z.boolean().optional(),
        notes: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
        beneficiaryId: z.string(),
        fingerprintId: z.union([z.string(), z.null()]).optional().nullable(),
        idCardId: z.union([z.string(), z.null()]).optional().nullable(),
        faceId: z.union([z.string(), z.null()]).optional().nullable(),
        voiceId: z.union([z.string(), z.null()]).optional().nullable(),
        medicalCenterId: z.string(),
        beneficiaryServices: z
            .lazy(() => BeneficiaryServiceUncheckedCreateNestedManyWithoutEntryRecordInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
