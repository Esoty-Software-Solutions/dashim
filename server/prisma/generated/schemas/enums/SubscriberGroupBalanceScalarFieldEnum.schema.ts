import { z } from 'zod';

export const SubscriberGroupBalanceScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'subscriberGroupId',
  'beneftiPackageId',
  'balance',
]);
