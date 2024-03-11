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
    copayDistrubtion: z.array(z.number()),
    threashold: z.array(z.number()),
});
const allRelationSchema = z.object({
    medicalServiceCategories: z.array(z.unknown()).optional(),
    insurancePolicy: z.record(z.unknown()).optional(),
    beneficiaryBalances: z.array(z.unknown()).optional(),
    insurancePolicyId: z.string(),
});
const safeRelationSchema = z.object({
    medicalServiceCategories: z.record(z.unknown()).optional(),
    insurancePolicy: z.record(z.unknown()),
    beneficiaryBalances: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    medicalServiceCategories: z.record(z.unknown()).optional(),
    insurancePolicyId: z.string(),
    beneficiaryBalances: z.record(z.unknown()).optional(),
});
export const BenefitPackageScalarSchema = baseSchema;
export const BenefitPackageSchema = BenefitPackageScalarSchema.merge(allRelationSchema);
export const BenefitPackageCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
    copayDistrubtion: true,
    threashold: true,
});
export const BenefitPackageCreateSchema = z.union([
    BenefitPackageCreateScalarSchema.merge(safeRelationSchema.partial()),
    BenefitPackageCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const BenefitPackageUpdateScalarSchema = baseSchema.partial();
export const BenefitPackageUpdateSchema = z.union([
    BenefitPackageUpdateScalarSchema.merge(safeRelationSchema.partial()),
    BenefitPackageUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
