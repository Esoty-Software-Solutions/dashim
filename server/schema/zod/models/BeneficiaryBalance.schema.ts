/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
    balancePending: z.number(),
    balanceActual: z.number(),
});
const allRelationSchema = z.object({
    beneficiary: z.record(z.unknown()).optional(),
    beneftiPackage: z.record(z.unknown()).optional(),
    beneficiaryId: z.string(),
    beneftiPackageId: z.string(),
});
const safeRelationSchema = z.object({
    beneficiary: z.record(z.unknown()),
    beneftiPackage: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    beneficiaryId: z.string(),
    beneftiPackageId: z.string(),
});
export const BeneficiaryBalanceScalarSchema = baseSchema;
export const BeneficiaryBalanceSchema = BeneficiaryBalanceScalarSchema.merge(allRelationSchema);
export const BeneficiaryBalanceCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const BeneficiaryBalanceCreateSchema = z.union([
    BeneficiaryBalanceCreateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryBalanceCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const BeneficiaryBalanceUpdateScalarSchema = baseSchema.partial();
export const BeneficiaryBalanceUpdateSchema = z.union([
    BeneficiaryBalanceUpdateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryBalanceUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
