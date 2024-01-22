import { z } from 'zod';

export const EntryRecordScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'isValidated',
  'isManuallyInserted',
  'beneficiaryId',
  'fingerprintId',
  'idCardId',
  'faceId',
  'voiceId',
  'medicalCenterId',
]);
