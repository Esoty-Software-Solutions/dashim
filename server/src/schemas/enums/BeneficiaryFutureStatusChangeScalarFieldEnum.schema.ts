import { z } from 'zod';

export const BeneficiaryFutureStatusChangeScalarFieldEnumSchema = z.enum([
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
  'beneficiaryId',
]);
