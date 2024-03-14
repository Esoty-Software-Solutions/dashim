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
    beneficiary: z.record(z.unknown()).optional(),
    entryRecords: z.array(z.unknown()).optional(),
    beneficiaryId: z.string(),
});
const safeRelationSchema = z.object({
    beneficiary: z.record(z.unknown()),
    entryRecords: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    beneficiaryId: z.string(),
    entryRecords: z.record(z.unknown()).optional(),
});
export const FaceBiometricScalarSchema = baseSchema;
export const FaceBiometricSchema = FaceBiometricScalarSchema.merge(allRelationSchema);
export const FaceBiometricCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const FaceBiometricCreateSchema = z.union([
    FaceBiometricCreateScalarSchema.merge(safeRelationSchema.partial()),
    FaceBiometricCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const FaceBiometricUpdateScalarSchema = baseSchema.partial();
export const FaceBiometricUpdateSchema = z.union([
    FaceBiometricUpdateScalarSchema.merge(safeRelationSchema.partial()),
    FaceBiometricUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
