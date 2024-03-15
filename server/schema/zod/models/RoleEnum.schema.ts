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
export const RoleEnumSchema = baseSchema;
export const RoleEnumCreateSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const RoleEnumUpdateSchema = baseSchema.partial();
