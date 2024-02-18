import { z } from 'zod';

export const EntryRecordScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'createdById',
  'updatedById',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'isValidated',
  'isManuallyInserted',
  'notes',
  'beneficiaryId',
  'fingerprintId',
  'idCardId',
  'faceId',
  'voiceId',
  'medicalCenterId',
]);
