import { z } from 'zod';

export const InstitutionMedicalCeneterServiceScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'institutionId',
  'medicalCenterServiceId',
  'basePrice',
]);
