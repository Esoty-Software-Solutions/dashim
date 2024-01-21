import { z } from 'zod';

export const BenefitPackageMedicalServiceTemplateScalarFieldEnumSchema = z.enum(
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
    'medicalServiceTemplateId',
  ],
);
