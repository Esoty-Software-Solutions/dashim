import { z } from 'zod';

export const BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema = z.enum(
  [
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'isActive',
    'deactivationReason',
    'deactivationDate',
    'benefitPackageId',
    'medicalServiceCategoryId',
  ],
);
