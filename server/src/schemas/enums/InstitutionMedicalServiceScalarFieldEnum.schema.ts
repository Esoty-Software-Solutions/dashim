import { z } from 'zod';

export const InstitutionMedicalServiceScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'institutionId',
  'medicalServiceId',
  'basePrice',
]);
