import { z } from 'zod';

export const InsurancePolicyScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'name',
  'Accumulatedlimit',
  'BalanceResetDate',
  'institutionId',
  'issueDate',
  'renewalDate',
  'serviceEntryTimeWindow',
]);
