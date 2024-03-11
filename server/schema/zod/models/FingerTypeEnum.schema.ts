/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
    arabic: z.string().nullish(),
    english: z.string().nullish(),
    name: z.string(),
});
const allRelationSchema = z.object({
    fingerType: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    fingerType: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    fingerType: z.record(z.unknown()).optional(),
});
export const FingerTypeEnumScalarSchema = baseSchema;
export const FingerTypeEnumSchema = FingerTypeEnumScalarSchema.merge(allRelationSchema);
export const FingerTypeEnumCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const FingerTypeEnumCreateSchema = z.union([
    FingerTypeEnumCreateScalarSchema.merge(safeRelationSchema.partial()),
    FingerTypeEnumCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const FingerTypeEnumUpdateScalarSchema = baseSchema.partial();
export const FingerTypeEnumUpdateSchema = z.union([
    FingerTypeEnumUpdateScalarSchema.merge(safeRelationSchema.partial()),
    FingerTypeEnumUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
