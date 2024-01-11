import { z } from 'zod';

export const TimeWindowScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'medicalCenterId',
  'time',
]);
