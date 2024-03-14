/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
    createdById: z.string(),
    updatedById: z.string().nullish(),
    changeDate: z.date(),
    futureStatus: z.boolean(),
    description: z.string().nullish(),
});
const allRelationSchema = z.object({
    CreatedBy: z.record(z.unknown()).optional(),
    UpdatedBy: z.record(z.unknown()).optional(),
    beneficiary: z.record(z.unknown()).optional(),
    beneficiaryId: z.string(),
});
const safeRelationSchema = z.object({
    CreatedBy: z.record(z.unknown()),
    UpdatedBy: z.record(z.unknown()).optional(),
    beneficiary: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    beneficiaryId: z.string(),
});
export const BeneficiaryFutureStatusChangeScalarSchema = baseSchema;
export const BeneficiaryFutureStatusChangeSchema = BeneficiaryFutureStatusChangeScalarSchema.merge(allRelationSchema);
export const BeneficiaryFutureStatusChangeCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const BeneficiaryFutureStatusChangeCreateSchema = z.union([
    BeneficiaryFutureStatusChangeCreateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryFutureStatusChangeCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const BeneficiaryFutureStatusChangeUpdateScalarSchema = baseSchema.partial();
export const BeneficiaryFutureStatusChangeUpdateSchema = z.union([
    BeneficiaryFutureStatusChangeUpdateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryFutureStatusChangeUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
