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
});
const allRelationSchema = z.object({
    CreatedBy: z.record(z.unknown()).optional(),
    UpdatedBy: z.record(z.unknown()).optional(),
    beneficiaryService: z.record(z.unknown()).optional(),
    transactionReviewStatus: z.record(z.unknown()).optional(),
    medicalReviewStatus: z.record(z.unknown()).optional(),
    transactionReviewStatusId: z.string(),
    medicalReviewStatusId: z.string(),
});
const safeRelationSchema = z.object({
    CreatedBy: z.record(z.unknown()),
    UpdatedBy: z.record(z.unknown()).optional(),
    beneficiaryService: z.record(z.unknown()).optional(),
    transactionReviewStatus: z.record(z.unknown()),
    medicalReviewStatus: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    beneficiaryService: z.record(z.unknown()).optional(),
    transactionReviewStatusId: z.string(),
    medicalReviewStatusId: z.string(),
});
export const ReviewStatusScalarSchema = baseSchema;
export const ReviewStatusSchema = ReviewStatusScalarSchema.merge(allRelationSchema);
export const ReviewStatusCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const ReviewStatusCreateSchema = z.union([
    ReviewStatusCreateScalarSchema.merge(safeRelationSchema.partial()),
    ReviewStatusCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const ReviewStatusUpdateScalarSchema = baseSchema.partial();
export const ReviewStatusUpdateSchema = z.union([
    ReviewStatusUpdateScalarSchema.merge(safeRelationSchema.partial()),
    ReviewStatusUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
