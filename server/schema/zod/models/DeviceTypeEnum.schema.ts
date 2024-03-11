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
    deviceToken: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    deviceToken: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    deviceToken: z.record(z.unknown()).optional(),
});
export const DeviceTypeEnumScalarSchema = baseSchema;
export const DeviceTypeEnumSchema = DeviceTypeEnumScalarSchema.merge(allRelationSchema);
export const DeviceTypeEnumCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const DeviceTypeEnumCreateSchema = z.union([
    DeviceTypeEnumCreateScalarSchema.merge(safeRelationSchema.partial()),
    DeviceTypeEnumCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const DeviceTypeEnumUpdateScalarSchema = baseSchema.partial();
export const DeviceTypeEnumUpdateSchema = z.union([
    DeviceTypeEnumUpdateScalarSchema.merge(safeRelationSchema.partial()),
    DeviceTypeEnumUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
