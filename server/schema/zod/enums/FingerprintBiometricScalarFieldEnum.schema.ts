/* eslint-disable */
import { z } from 'zod';

export const FingerprintBiometricScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'isActive',
    'deactivationReason',
    'deactivationDate',
    'fingerTypeId',
    'record',
    'beneficiaryId',
]);
