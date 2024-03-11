/* eslint-disable */
import { z } from 'zod';

export const BenefitPackageScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'isActive',
    'deactivationReason',
    'deactivationDate',
    'name',
    'copayDistrubtion',
    'threashold',
    'insurancePolicyId',
]);
