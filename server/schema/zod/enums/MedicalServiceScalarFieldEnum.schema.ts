/* eslint-disable */
import { z } from 'zod';

export const MedicalServiceScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'isActive',
    'deactivationReason',
    'deactivationDate',
    'name',
    'medicalCenterCode',
    'basePrice',
    'medicalCenterId',
    'categoryId',
]);
