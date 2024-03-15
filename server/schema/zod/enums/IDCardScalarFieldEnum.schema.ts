/* eslint-disable */
import { z } from 'zod';

export const IDCardScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'isActive',
    'deactivationReason',
    'deactivationDate',
    'record',
    'beneficiaryId',
]);
