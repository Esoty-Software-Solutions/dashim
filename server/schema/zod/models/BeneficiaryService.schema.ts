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
    isActive: z.boolean(),
    deactivationReason: z.string().nullish(),
    deactivationDate: z.date().nullish(),
    name: z.string(),
    Note: z.string().nullish(),
    billedAmmount: z.number(),
    allowedAmmount: z.number(),
    copayAmmount: z.number(),
    cashAmount: z.number(),
    coveredAmount: z.number(),
    defferedAmount: z.number(),
    coinsuranceAmount: z.number(),
    notes: z.any(),
    isExamination: z.boolean(),
    groupId: z.string(),
});
const allRelationSchema = z.object({
    CreatedBy: z.record(z.unknown()).optional(),
    UpdatedBy: z.record(z.unknown()).optional(),
    reviewStatus: z.record(z.unknown()).optional(),
    entryRecord: z.record(z.unknown()).optional(),
    medicalService: z.record(z.unknown()).optional(),
    reviewStatusId: z.string(),
    entryRecordId: z.string(),
    medicalServiceId: z.string(),
});
const safeRelationSchema = z.object({
    CreatedBy: z.record(z.unknown()),
    UpdatedBy: z.record(z.unknown()).optional(),
    reviewStatus: z.record(z.unknown()),
    entryRecord: z.record(z.unknown()),
    medicalService: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    reviewStatusId: z.string(),
    entryRecordId: z.string(),
    medicalServiceId: z.string(),
});
export const BeneficiaryServiceScalarSchema = baseSchema;
export const BeneficiaryServiceSchema = BeneficiaryServiceScalarSchema.merge(allRelationSchema);
export const BeneficiaryServiceCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const BeneficiaryServiceCreateSchema = z.union([
    BeneficiaryServiceCreateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryServiceCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const BeneficiaryServiceUpdateScalarSchema = baseSchema.partial();
export const BeneficiaryServiceUpdateSchema = z.union([
    BeneficiaryServiceUpdateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryServiceUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
