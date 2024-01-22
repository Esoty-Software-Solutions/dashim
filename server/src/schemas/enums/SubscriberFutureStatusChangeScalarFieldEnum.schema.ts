import { z } from 'zod';

export const SubscriberFutureStatusChangeScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'createdById',
  'updatedById',
  'changeDate',
  'futureStatus',
  'description',
  'subscriberId',
]);
