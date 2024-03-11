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
    beneficiary: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    beneficiary: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    beneficiary: z.record(z.unknown()).optional(),
});
export const RelationshipEnumScalarSchema = baseSchema;
export const RelationshipEnumSchema = RelationshipEnumScalarSchema.merge(allRelationSchema);
export const RelationshipEnumCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const RelationshipEnumCreateSchema = z.union([
    RelationshipEnumCreateScalarSchema.merge(safeRelationSchema.partial()),
    RelationshipEnumCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const RelationshipEnumUpdateScalarSchema = baseSchema.partial();
export const RelationshipEnumUpdateSchema = z.union([
    RelationshipEnumUpdateScalarSchema.merge(safeRelationSchema.partial()),
    RelationshipEnumUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
