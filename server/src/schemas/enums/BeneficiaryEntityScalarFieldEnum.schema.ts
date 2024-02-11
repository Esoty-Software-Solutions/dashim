import { z } from 'zod';

export const BeneficiaryEntityScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'statusSetById',
  'cityId',
  'address',
  'insurancePolicyId',
]);
