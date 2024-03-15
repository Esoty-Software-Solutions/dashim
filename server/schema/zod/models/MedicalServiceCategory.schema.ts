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
    dalilCode: z.string(),
    basePrice: z.string(),
    IsPriceVaried: z.boolean(),
    description: z.string(),
});
const allRelationSchema = z.object({
    beneftiPackages: z.array(z.unknown()).optional(),
    services: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    beneftiPackages: z.record(z.unknown()).optional(),
    services: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    beneftiPackages: z.record(z.unknown()).optional(),
    services: z.record(z.unknown()).optional(),
});
export const MedicalServiceCategoryScalarSchema = baseSchema;
export const MedicalServiceCategorySchema = MedicalServiceCategoryScalarSchema.merge(allRelationSchema);
export const MedicalServiceCategoryCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
    IsPriceVaried: true,
});
export const MedicalServiceCategoryCreateSchema = z.union([
    MedicalServiceCategoryCreateScalarSchema.merge(safeRelationSchema.partial()),
    MedicalServiceCategoryCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const MedicalServiceCategoryUpdateScalarSchema = baseSchema.partial();
export const MedicalServiceCategoryUpdateSchema = z.union([
    MedicalServiceCategoryUpdateScalarSchema.merge(safeRelationSchema.partial()),
    MedicalServiceCategoryUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
