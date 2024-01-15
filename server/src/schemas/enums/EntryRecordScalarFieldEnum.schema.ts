import { z } from 'zod';

export const EntryRecordScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'beneficiaryId',
  'fingerprintId',
  'idCardId',
  'faceId',
  'voiceId',
  'isValidated',
  'isManuallyInserted',
  'medicalCenterId',
]);
