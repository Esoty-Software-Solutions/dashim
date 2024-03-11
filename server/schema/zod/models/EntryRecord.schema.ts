/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
    createdById: z.string(),
    updatedById: z.string().nullish(),
    isActive: z.boolean(),
    deactivationReason: z.string().nullish(),
    deactivationDate: z.date().nullish(),
    isValidated: z.boolean(),
    isManuallyInserted: z.boolean(),
    notes: z.any(),
});
const allRelationSchema = z.object({
    CreatedBy: z.record(z.unknown()).optional(),
    UpdatedBy: z.record(z.unknown()).optional(),
    beneficiary: z.record(z.unknown()).optional(),
    fingerprintBiometric: z.record(z.unknown()).optional(),
    idCardBiometric: z.record(z.unknown()).optional(),
    faceBiometric: z.record(z.unknown()).optional(),
    voiceBiometric: z.record(z.unknown()).optional(),
    medicalCenter: z.record(z.unknown()).optional(),
    beneficiaryServices: z.array(z.unknown()).optional(),
    beneficiaryId: z.string(),
    fingerprintId: z.string().nullish(),
    idCardId: z.string().nullish(),
    faceId: z.string().nullish(),
    voiceId: z.string().nullish(),
    medicalCenterId: z.string(),
});
const safeRelationSchema = z.object({
    CreatedBy: z.record(z.unknown()),
    UpdatedBy: z.record(z.unknown()).optional(),
    beneficiary: z.record(z.unknown()),
    fingerprintBiometric: z.record(z.unknown()).optional(),
    idCardBiometric: z.record(z.unknown()).optional(),
    faceBiometric: z.record(z.unknown()).optional(),
    voiceBiometric: z.record(z.unknown()).optional(),
    medicalCenter: z.record(z.unknown()),
    beneficiaryServices: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    beneficiaryId: z.string(),
    fingerprintId: z.string().nullish(),
    idCardId: z.string().nullish(),
    faceId: z.string().nullish(),
    voiceId: z.string().nullish(),
    medicalCenterId: z.string(),
    beneficiaryServices: z.record(z.unknown()).optional(),
});
export const EntryRecordScalarSchema = baseSchema;
export const EntryRecordSchema = EntryRecordScalarSchema.merge(allRelationSchema);
export const EntryRecordCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
    isManuallyInserted: true,
});
export const EntryRecordCreateSchema = z.union([
    EntryRecordCreateScalarSchema.merge(safeRelationSchema.partial()),
    EntryRecordCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const EntryRecordUpdateScalarSchema = baseSchema.partial();
export const EntryRecordUpdateSchema = z.union([
    EntryRecordUpdateScalarSchema.merge(safeRelationSchema.partial()),
    EntryRecordUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
