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
    code: z.string(),
});
const allRelationSchema = z.object({
    cities: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    cities: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    cities: z.record(z.unknown()).optional(),
});
export const CountryEnumScalarSchema = baseSchema;
export const CountryEnumSchema = CountryEnumScalarSchema.merge(allRelationSchema);
export const CountryEnumCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const CountryEnumCreateSchema = z.union([
    CountryEnumCreateScalarSchema.merge(safeRelationSchema.partial()),
    CountryEnumCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const CountryEnumUpdateScalarSchema = baseSchema.partial();
export const CountryEnumUpdateSchema = z.union([
    CountryEnumUpdateScalarSchema.merge(safeRelationSchema.partial()),
    CountryEnumUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
