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
    tenant: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    tenant: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    tenant: z.record(z.unknown()).optional(),
});
export const TenantTypeEnumScalarSchema = baseSchema;
export const TenantTypeEnumSchema = TenantTypeEnumScalarSchema.merge(allRelationSchema);
export const TenantTypeEnumCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const TenantTypeEnumCreateSchema = z.union([
    TenantTypeEnumCreateScalarSchema.merge(safeRelationSchema.partial()),
    TenantTypeEnumCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const TenantTypeEnumUpdateScalarSchema = baseSchema.partial();
export const TenantTypeEnumUpdateSchema = z.union([
    TenantTypeEnumUpdateScalarSchema.merge(safeRelationSchema.partial()),
    TenantTypeEnumUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
