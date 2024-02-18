import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.EntryRecordCreateManyIdCardBiometricInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    createdById: z.string(),
    updatedById: z.string().optional().nullable(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    isValidated: z.boolean(),
    isManuallyInserted: z.boolean().optional(),
    notes: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    beneficiaryId: z.string(),
    fingerprintId: z.string().optional().nullable(),
    faceId: z.string().optional().nullable(),
    voiceId: z.string().optional().nullable(),
    medicalCenterId: z.string(),
  })
  .strict();

export const EntryRecordCreateManyIdCardBiometricInputObjectSchema = Schema;
