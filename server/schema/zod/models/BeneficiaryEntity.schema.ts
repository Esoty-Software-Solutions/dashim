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
    statusSetById: z.string(),
    cityId: z.string(),
    address: z.string().nullish(),
});
const allRelationSchema = z.object({
    StatusSetBy: z.record(z.unknown()).optional(),
    city: z.record(z.unknown()).optional(),
    insurancePolicy: z.record(z.unknown()).optional(),
    beneficiaries: z.array(z.unknown()).optional(),
    futureStatus: z.array(z.unknown()).optional(),
    insurancePolicyId: z.string(),
});
const safeRelationSchema = z.object({
    StatusSetBy: z.record(z.unknown()),
    city: z.record(z.unknown()),
    insurancePolicy: z.record(z.unknown()),
    beneficiaries: z.record(z.unknown()).optional(),
    futureStatus: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    insurancePolicyId: z.string(),
    beneficiaries: z.record(z.unknown()).optional(),
    futureStatus: z.record(z.unknown()).optional(),
});
export const BeneficiaryEntityScalarSchema = baseSchema;
export const BeneficiaryEntitySchema = BeneficiaryEntityScalarSchema.merge(allRelationSchema);
export const BeneficiaryEntityCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const BeneficiaryEntityCreateSchema = z.union([
    BeneficiaryEntityCreateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryEntityCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const BeneficiaryEntityUpdateScalarSchema = baseSchema.partial();
export const BeneficiaryEntityUpdateSchema = z.union([
    BeneficiaryEntityUpdateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryEntityUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
