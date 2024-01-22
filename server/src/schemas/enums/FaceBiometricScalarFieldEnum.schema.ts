import { z } from 'zod';

export const FaceBiometricScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'hash',
  'beneficiaryId',
]);
