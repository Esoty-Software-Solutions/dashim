import { z } from 'zod';

export const InsurancePolicyMedicalCenterScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'insurancePolicyId',
  'medicalCenterId',
]);
