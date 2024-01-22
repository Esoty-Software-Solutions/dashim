import { z } from 'zod';

export const CurrencyScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'arabic',
  'english',
  'name',
  'code',
  'symbol',
  'buyExchangeRate',
  'SellExchangeRate',
]);
