import { z } from 'zod';

export const CountryEnumScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'arabic',
  'english',
  'name',
  'code',
]);
