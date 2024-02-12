import { z } from 'zod';

export const BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema = z.enum([
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
  'beneficiaryEntityId',
]);
