import { z } from 'zod';

export const CoPayDistributionScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'threashold',
  'Percentage',
]);
