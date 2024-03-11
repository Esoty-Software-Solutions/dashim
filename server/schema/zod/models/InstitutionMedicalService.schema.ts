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
    basePrice: z.number(),
});
const allRelationSchema = z.object({
    institution: z.record(z.unknown()).optional(),
    medicalService: z.record(z.unknown()).optional(),
    institutionId: z.string(),
    medicalServiceId: z.string(),
});
const safeRelationSchema = z.object({
    institution: z.record(z.unknown()),
    medicalService: z.record(z.unknown()),
});
const unsafeRelationSchema = z.object({
    institutionId: z.string(),
    medicalServiceId: z.string(),
});
export const InstitutionMedicalServiceScalarSchema = baseSchema;
export const InstitutionMedicalServiceSchema = InstitutionMedicalServiceScalarSchema.merge(allRelationSchema);
export const InstitutionMedicalServiceCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const InstitutionMedicalServiceCreateSchema = z.union([
    InstitutionMedicalServiceCreateScalarSchema.merge(safeRelationSchema.partial()),
    InstitutionMedicalServiceCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const InstitutionMedicalServiceUpdateScalarSchema = baseSchema.partial();
export const InstitutionMedicalServiceUpdateSchema = z.union([
    InstitutionMedicalServiceUpdateScalarSchema.merge(safeRelationSchema.partial()),
    InstitutionMedicalServiceUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
