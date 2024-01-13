import { z } from 'zod';

export const InsurancePolicyMedicalCentersScalarFieldEnumSchema = z.enum([
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
