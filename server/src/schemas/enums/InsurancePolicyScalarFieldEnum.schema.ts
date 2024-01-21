import { z } from 'zod';

export const InsurancePolicyScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'name',
  'Accumulatedlimit',
  'BalanceResetDate',
  'issueDate',
  'renewalDate',
  'serviceEntryTimeWindow',
  'institutionId',
]);
