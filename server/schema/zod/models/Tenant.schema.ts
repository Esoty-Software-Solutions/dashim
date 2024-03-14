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
    name: z.string(),
    description: z.string().nullish(),
    logo: z.string().nullish(),
    website: z.string().nullish(),
    phone: z.string().nullish(),
    email: z.string().nullish(),
    address: z.string().nullish(),
    city: z.string().nullish(),
    country: z.string().nullish(),
});
const allRelationSchema = z.object({
    type: z.record(z.unknown()).optional(),
    assignedToMedicalCenter: z.record(z.unknown()).optional(),
    owner: z.record(z.unknown()).optional(),
    members: z.array(z.unknown()).optional(),
    typeId: z.string(),
    ownerId: z.string(),
});
const safeRelationSchema = z.object({
    type: z.record(z.unknown()),
    assignedToMedicalCenter: z.record(z.unknown()).optional(),
    owner: z.record(z.unknown()),
    members: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    typeId: z.string(),
    assignedToMedicalCenter: z.record(z.unknown()).optional(),
    ownerId: z.string(),
    members: z.record(z.unknown()).optional(),
});
export const TenantScalarSchema = baseSchema;
export const TenantSchema = TenantScalarSchema.merge(allRelationSchema);
export const TenantCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const TenantCreateSchema = z.union([
    TenantCreateScalarSchema.merge(safeRelationSchema.partial()),
    TenantCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const TenantUpdateScalarSchema = baseSchema.partial();
export const TenantUpdateSchema = z.union([
    TenantUpdateScalarSchema.merge(safeRelationSchema.partial()),
    TenantUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
