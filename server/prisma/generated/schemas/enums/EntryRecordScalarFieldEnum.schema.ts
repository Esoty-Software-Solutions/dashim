import { z } from 'zod';

export const EntryRecordScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'subscriberGroupId',
  'fingerprintId',
  'isValidated',
  'isManuallyInserted',
  'idCardId',
  'faceId',
  'voiceId',
  'medicalCenterId',
]);
