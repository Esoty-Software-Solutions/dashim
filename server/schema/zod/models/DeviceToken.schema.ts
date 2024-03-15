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
    deviceName: z.string(),
    token: z.string(),
});
const allRelationSchema = z.object({
    deviceType: z.record(z.unknown()).optional(),
    user: z.record(z.unknown()).optional(),
    deviceTypeId: z.string(),
    userId: z.string(),
});
const safeRelationSchema = z.object({
    deviceType: z.record(z.unknown()),
    user: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    deviceTypeId: z.string(),
    userId: z.string(),
});
export const DeviceTokenScalarSchema = baseSchema;
export const DeviceTokenSchema = DeviceTokenScalarSchema.merge(allRelationSchema);
export const DeviceTokenCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const DeviceTokenCreateSchema = z.union([
    DeviceTokenCreateScalarSchema.merge(safeRelationSchema.partial()),
    DeviceTokenCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const DeviceTokenUpdateScalarSchema = baseSchema.partial();
export const DeviceTokenUpdateSchema = z.union([
    DeviceTokenUpdateScalarSchema.merge(safeRelationSchema.partial()),
    DeviceTokenUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
