import { z } from 'zod';

export const VoiceBiometricScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'hash',
  'beneficiaryId',
]);
