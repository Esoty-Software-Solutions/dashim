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
});
const allRelationSchema = z.object({
    tenant: z.record(z.unknown()).optional(),
    member: z.record(z.unknown()).optional(),
    tenantId: z.string(),
    memberId: z.string(),
});
const safeRelationSchema = z.object({
    tenant: z.record(z.unknown()),
    member: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    tenantId: z.string(),
    memberId: z.string(),
});
export const TenantMemberScalarSchema = baseSchema;
export const TenantMemberSchema = TenantMemberScalarSchema.merge(allRelationSchema);
export const TenantMemberCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const TenantMemberCreateSchema = z.union([
    TenantMemberCreateScalarSchema.merge(safeRelationSchema.partial()),
    TenantMemberCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const TenantMemberUpdateScalarSchema = baseSchema.partial();
export const TenantMemberUpdateSchema = z.union([
    TenantMemberUpdateScalarSchema.merge(safeRelationSchema.partial()),
    TenantMemberUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
