/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
    isActive: z.boolean(),
    deactivationReason: z.string().nullish(),
    deactivationDate: z.date().nullish(),
    record: z.string(),
});
const allRelationSchema = z.object({
    fingerType: z.record(z.unknown()).optional(),
    beneficiary: z.record(z.unknown()).optional(),
    entryRecords: z.array(z.unknown()).optional(),
    fingerTypeId: z.string(),
    beneficiaryId: z.string(),
});
const safeRelationSchema = z.object({
    fingerType: z.record(z.unknown()),
    beneficiary: z.record(z.unknown()),
    entryRecords: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    fingerTypeId: z.string(),
    beneficiaryId: z.string(),
    entryRecords: z.record(z.unknown()).optional(),
});
export const FingerprintBiometricScalarSchema = baseSchema;
export const FingerprintBiometricSchema = FingerprintBiometricScalarSchema.merge(allRelationSchema);
export const FingerprintBiometricCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const FingerprintBiometricCreateSchema = z.union([
    FingerprintBiometricCreateScalarSchema.merge(safeRelationSchema.partial()),
    FingerprintBiometricCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const FingerprintBiometricUpdateScalarSchema = baseSchema.partial();
export const FingerprintBiometricUpdateSchema = z.union([
    FingerprintBiometricUpdateScalarSchema.merge(safeRelationSchema.partial()),
    FingerprintBiometricUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
