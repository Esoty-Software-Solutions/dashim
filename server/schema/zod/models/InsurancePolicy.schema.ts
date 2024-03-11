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
    Accumulatedlimit: z.number(),
    BalanceResetDate: z.date(),
    issueDate: z.date(),
    renewalDate: z.date(),
    serviceEntryTimeWindow: z.number(),
});
const allRelationSchema = z.object({
    institution: z.record(z.unknown()).optional(),
    beneficiaryEntities: z.array(z.unknown()).optional(),
    benefitPackages: z.array(z.unknown()).optional(),
    medicalCenters: z.array(z.unknown()).optional(),
    institutionId: z.string(),
});
const safeRelationSchema = z.object({
    institution: z.record(z.unknown()),
    beneficiaryEntities: z.record(z.unknown()).optional(),
    benefitPackages: z.record(z.unknown()).optional(),
    medicalCenters: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    institutionId: z.string(),
    beneficiaryEntities: z.record(z.unknown()).optional(),
    benefitPackages: z.record(z.unknown()).optional(),
    medicalCenters: z.record(z.unknown()).optional(),
});
export const InsurancePolicyScalarSchema = baseSchema;
export const InsurancePolicySchema = InsurancePolicyScalarSchema.merge(allRelationSchema);
export const InsurancePolicyCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
    serviceEntryTimeWindow: true,
});
export const InsurancePolicyCreateSchema = z.union([
    InsurancePolicyCreateScalarSchema.merge(safeRelationSchema.partial()),
    InsurancePolicyCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const InsurancePolicyUpdateScalarSchema = baseSchema.partial();
export const InsurancePolicyUpdateSchema = z.union([
    InsurancePolicyUpdateScalarSchema.merge(safeRelationSchema.partial()),
    InsurancePolicyUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
