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
    cityId: z.string(),
    address: z.string().nullish(),
    name: z.string(),
    code: z.string(),
    legacyCode: z.string().nullish(),
    description: z.string().nullish(),
    phoneArray: z.array(z.string()),
    emailArray: z.array(z.string()),
    website: z.string().url(),
    facebookLink: z.string().url(),
    googleMapsLink: z.string().url(),
    twitterLink: z.string().url(),
    instagramLink: z.string().url(),
    latitude: z.number().nullish(),
    longitude: z.number().nullish(),
});
const allRelationSchema = z.object({
    city: z.record(z.unknown()).optional(),
    policies: z.array(z.unknown()).optional(),
    MedicalCenterPricing: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    city: z.record(z.unknown()),
    policies: z.record(z.unknown()).optional(),
    MedicalCenterPricing: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    policies: z.record(z.unknown()).optional(),
    MedicalCenterPricing: z.record(z.unknown()).optional(),
});
export const InstitutionScalarSchema = baseSchema;
export const InstitutionSchema = InstitutionScalarSchema.merge(allRelationSchema);
export const InstitutionCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
    phoneArray: true,
    emailArray: true,
});
export const InstitutionCreateSchema = z.union([
    InstitutionCreateScalarSchema.merge(safeRelationSchema.partial()),
    InstitutionCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const InstitutionUpdateScalarSchema = baseSchema.partial();
export const InstitutionUpdateSchema = z.union([
    InstitutionUpdateScalarSchema.merge(safeRelationSchema.partial()),
    InstitutionUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
