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
    beneficiaryEntity: z.record(z.unknown()).optional(),
    beneficiaryEntityId: z.string(),
});
const safeRelationSchema = z.object({
    CreatedBy: z.record(z.unknown()),
    UpdatedBy: z.record(z.unknown()).optional(),
    beneficiaryEntity: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    beneficiaryEntityId: z.string(),
});
export const BeneficiaryEntityFutureStatusChangeScalarSchema = baseSchema;
export const BeneficiaryEntityFutureStatusChangeSchema =
    BeneficiaryEntityFutureStatusChangeScalarSchema.merge(allRelationSchema);
export const BeneficiaryEntityFutureStatusChangeCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const BeneficiaryEntityFutureStatusChangeCreateSchema = z.union([
    BeneficiaryEntityFutureStatusChangeCreateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryEntityFutureStatusChangeCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const BeneficiaryEntityFutureStatusChangeUpdateScalarSchema = baseSchema.partial();
export const BeneficiaryEntityFutureStatusChangeUpdateSchema = z.union([
    BeneficiaryEntityFutureStatusChangeUpdateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryEntityFutureStatusChangeUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
