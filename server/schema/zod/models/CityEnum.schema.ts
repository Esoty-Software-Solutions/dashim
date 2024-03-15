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
    country: z.record(z.unknown()).optional(),
    institutions: z.array(z.unknown()).optional(),
    medicalcenters: z.array(z.unknown()).optional(),
    beneficiaryEntities: z.array(z.unknown()).optional(),
    countryId: z.string(),
});
const safeRelationSchema = z.object({
    country: z.record(z.unknown()),
    institutions: z.record(z.unknown()).optional(),
    medicalcenters: z.record(z.unknown()).optional(),
    beneficiaryEntities: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    countryId: z.string(),
    institutions: z.record(z.unknown()).optional(),
    medicalcenters: z.record(z.unknown()).optional(),
    beneficiaryEntities: z.record(z.unknown()).optional(),
});
export const CityEnumScalarSchema = baseSchema;
export const CityEnumSchema = CityEnumScalarSchema.merge(allRelationSchema);
export const CityEnumCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const CityEnumCreateSchema = z.union([
    CityEnumCreateScalarSchema.merge(safeRelationSchema.partial()),
    CityEnumCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const CityEnumUpdateScalarSchema = baseSchema.partial();
export const CityEnumUpdateSchema = z.union([
    CityEnumUpdateScalarSchema.merge(safeRelationSchema.partial()),
    CityEnumUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
