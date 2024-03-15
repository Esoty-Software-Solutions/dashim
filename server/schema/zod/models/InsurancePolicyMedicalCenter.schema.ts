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
    insurancePolicy: z.record(z.unknown()).optional(),
    medicalCenter: z.record(z.unknown()).optional(),
    insurancePolicyId: z.string(),
    medicalCenterId: z.string(),
});
const safeRelationSchema = z.object({
    insurancePolicy: z.record(z.unknown()),
    medicalCenter: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    insurancePolicyId: z.string(),
    medicalCenterId: z.string(),
});
export const InsurancePolicyMedicalCenterScalarSchema = baseSchema;
export const InsurancePolicyMedicalCenterSchema = InsurancePolicyMedicalCenterScalarSchema.merge(allRelationSchema);
export const InsurancePolicyMedicalCenterCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const InsurancePolicyMedicalCenterCreateSchema = z.union([
    InsurancePolicyMedicalCenterCreateScalarSchema.merge(safeRelationSchema.partial()),
    InsurancePolicyMedicalCenterCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const InsurancePolicyMedicalCenterUpdateScalarSchema = baseSchema.partial();
export const InsurancePolicyMedicalCenterUpdateSchema = z.union([
    InsurancePolicyMedicalCenterUpdateScalarSchema.merge(safeRelationSchema.partial()),
    InsurancePolicyMedicalCenterUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
