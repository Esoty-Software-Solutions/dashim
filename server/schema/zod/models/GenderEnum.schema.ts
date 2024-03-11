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
    user: z.array(z.unknown()).optional(),
    beneficiary: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    user: z.record(z.unknown()).optional(),
    beneficiary: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    user: z.record(z.unknown()).optional(),
    beneficiary: z.record(z.unknown()).optional(),
});
export const GenderEnumScalarSchema = baseSchema;
export const GenderEnumSchema = GenderEnumScalarSchema.merge(allRelationSchema);
export const GenderEnumCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const GenderEnumCreateSchema = z.union([
    GenderEnumCreateScalarSchema.merge(safeRelationSchema.partial()),
    GenderEnumCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const GenderEnumUpdateScalarSchema = baseSchema.partial();
export const GenderEnumUpdateSchema = z.union([
    GenderEnumUpdateScalarSchema.merge(safeRelationSchema.partial()),
    GenderEnumUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
