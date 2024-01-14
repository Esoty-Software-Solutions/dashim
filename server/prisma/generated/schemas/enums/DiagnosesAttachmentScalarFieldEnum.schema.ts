import { z } from 'zod';

export const DiagnosesAttachmentScalarFieldEnumSchema = z.enum([
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
