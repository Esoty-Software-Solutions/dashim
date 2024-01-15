import { z } from 'zod';

export const DiagnosisAttachmentScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'name',
  'link',
  'size',
  'contentType',
  'metadata',
]);
