/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
    arabic: z.string().nullish(),
    english: z.string().nullish(),
    name: z.string(),
});
const allRelationSchema = z.object({
    transactionBeneficiaryServices: z.array(z.unknown()).optional(),
    medicalBeneficiaryServices: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    transactionBeneficiaryServices: z.record(z.unknown()).optional(),
    medicalBeneficiaryServices: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    transactionBeneficiaryServices: z.record(z.unknown()).optional(),
    medicalBeneficiaryServices: z.record(z.unknown()).optional(),
});
export const ReviewStatusEnumScalarSchema = baseSchema;
export const ReviewStatusEnumSchema = ReviewStatusEnumScalarSchema.merge(allRelationSchema);
export const ReviewStatusEnumCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const ReviewStatusEnumCreateSchema = z.union([
    ReviewStatusEnumCreateScalarSchema.merge(safeRelationSchema.partial()),
    ReviewStatusEnumCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const ReviewStatusEnumUpdateScalarSchema = baseSchema.partial();
export const ReviewStatusEnumUpdateSchema = z.union([
    ReviewStatusEnumUpdateScalarSchema.merge(safeRelationSchema.partial()),
    ReviewStatusEnumUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
