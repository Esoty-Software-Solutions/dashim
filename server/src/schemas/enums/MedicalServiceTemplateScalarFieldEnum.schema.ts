import { z } from 'zod';

export const MedicalServiceTemplateScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'name',
  'dalilCode',
  'basePrice',
  'IsPriceVaried',
  'description',
]);
