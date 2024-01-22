import { z } from 'zod';

export const TenantMemberScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'tenantId',
  'memberId',
]);
