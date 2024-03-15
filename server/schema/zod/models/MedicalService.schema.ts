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
    medicalCenterCode: z.string(),
    basePrice: z.number(),
});
const allRelationSchema = z.object({
    medicalCenter: z.record(z.unknown()).optional(),
    beneficiaryServices: z.array(z.unknown()).optional(),
    institutionPricing: z.array(z.unknown()).optional(),
    category: z.record(z.unknown()).optional(),
    medicalCenterId: z.string(),
    categoryId: z.string(),
});
const safeRelationSchema = z.object({
    medicalCenter: z.record(z.unknown()),
    beneficiaryServices: z.record(z.unknown()).optional(),
    institutionPricing: z.record(z.unknown()).optional(),
    category: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    medicalCenterId: z.string(),
    beneficiaryServices: z.record(z.unknown()).optional(),
    institutionPricing: z.record(z.unknown()).optional(),
    categoryId: z.string(),
});
export const MedicalServiceScalarSchema = baseSchema;
export const MedicalServiceSchema = MedicalServiceScalarSchema.merge(allRelationSchema);
export const MedicalServiceCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const MedicalServiceCreateSchema = z.union([
    MedicalServiceCreateScalarSchema.merge(safeRelationSchema.partial()),
    MedicalServiceCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const MedicalServiceUpdateScalarSchema = baseSchema.partial();
export const MedicalServiceUpdateSchema = z.union([
    MedicalServiceUpdateScalarSchema.merge(safeRelationSchema.partial()),
    MedicalServiceUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
