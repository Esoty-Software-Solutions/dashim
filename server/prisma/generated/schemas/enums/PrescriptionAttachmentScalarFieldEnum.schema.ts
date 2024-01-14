import { z } from 'zod';

export const PrescriptionAttachmentScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
]);
