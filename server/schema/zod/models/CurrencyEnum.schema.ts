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
    symbol: z.string(),
    buyExchangeRate: z.number(),
    SellExchangeRate: z.number(),
});
export const CurrencyEnumSchema = baseSchema;
export const CurrencyEnumCreateSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    buyExchangeRate: true,
    SellExchangeRate: true,
});
export const CurrencyEnumUpdateSchema = baseSchema.partial();
