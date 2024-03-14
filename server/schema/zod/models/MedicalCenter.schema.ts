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
    description: z.string(),
    phone: z.array(z.string()),
    email: z.array(z.string()),
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
    managingTenant: z.record(z.unknown()).optional(),
    services: z.array(z.unknown()).optional(),
    insurancePolicy: z.array(z.unknown()).optional(),
    entryRecords: z.array(z.unknown()).optional(),
    managingTenantId: z.string(),
});
const safeRelationSchema = z.object({
    city: z.record(z.unknown()),
    managingTenant: z.record(z.unknown()),
    services: z.record(z.unknown()).optional(),
    insurancePolicy: z.record(z.unknown()).optional(),
    entryRecords: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    managingTenantId: z.string(),
    services: z.record(z.unknown()).optional(),
    insurancePolicy: z.record(z.unknown()).optional(),
    entryRecords: z.record(z.unknown()).optional(),
});
export const MedicalCenterScalarSchema = baseSchema;
export const MedicalCenterSchema = MedicalCenterScalarSchema.merge(allRelationSchema);
export const MedicalCenterCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
    phone: true,
    email: true,
});
export const MedicalCenterCreateSchema = z.union([
    MedicalCenterCreateScalarSchema.merge(safeRelationSchema.partial()),
    MedicalCenterCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const MedicalCenterUpdateScalarSchema = baseSchema.partial();
export const MedicalCenterUpdateSchema = z.union([
    MedicalCenterUpdateScalarSchema.merge(safeRelationSchema.partial()),
    MedicalCenterUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
