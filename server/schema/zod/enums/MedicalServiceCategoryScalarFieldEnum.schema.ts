/* eslint-disable */
import { z } from 'zod';

export const MedicalServiceCategoryScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'isActive',
    'deactivationReason',
    'deactivationDate',
    'name',
    'dalilCode',
    'basePrice',
    'IsPriceVaried',
    'description',
]);
