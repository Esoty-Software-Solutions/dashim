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
    benefitPackage: z.record(z.unknown()).optional(),
    medicalServiceCategory: z.record(z.unknown()).optional(),
    benefitPackageId: z.string(),
    medicalServiceCategoryId: z.string(),
});
const safeRelationSchema = z.object({
    benefitPackage: z.record(z.unknown()),
    medicalServiceCategory: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    benefitPackageId: z.string(),
    medicalServiceCategoryId: z.string(),
});
export const BenefitPackageMedicalServiceCategoryScalarSchema = baseSchema;
export const BenefitPackageMedicalServiceCategorySchema =
    BenefitPackageMedicalServiceCategoryScalarSchema.merge(allRelationSchema);
export const BenefitPackageMedicalServiceCategoryCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const BenefitPackageMedicalServiceCategoryCreateSchema = z.union([
    BenefitPackageMedicalServiceCategoryCreateScalarSchema.merge(safeRelationSchema.partial()),
    BenefitPackageMedicalServiceCategoryCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const BenefitPackageMedicalServiceCategoryUpdateScalarSchema = baseSchema.partial();
export const BenefitPackageMedicalServiceCategoryUpdateSchema = z.union([
    BenefitPackageMedicalServiceCategoryUpdateScalarSchema.merge(safeRelationSchema.partial()),
    BenefitPackageMedicalServiceCategoryUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
