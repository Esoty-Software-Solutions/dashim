import { z } from 'zod';

export const PackageMedicalServicesScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'beneftiPackageId',
  'medicalServiceId',
  'insurancePolicyId',
  'price',
]);
