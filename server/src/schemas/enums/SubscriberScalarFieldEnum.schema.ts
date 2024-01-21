import { z } from 'zod';

export const SubscriberScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'statusSetById',
  'insurancePolicyId',
]);
