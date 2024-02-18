import { z } from 'zod';

export const CurrencyEnumScalarFieldEnumSchema = z.enum([
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
