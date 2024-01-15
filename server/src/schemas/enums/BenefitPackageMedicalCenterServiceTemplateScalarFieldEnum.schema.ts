import { z } from 'zod';

export const BenefitPackageMedicalCenterServiceTemplateScalarFieldEnumSchema =
  z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'isActive',
    'deactivationReason',
    'benefitPackageId',
    'medicalCenterServiceTemplateId',
  ]);
