import { z } from 'zod';

export const FingerprintBiometricScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'fingerTypeId',
  'hash',
  'beneficiaryId',
]);
