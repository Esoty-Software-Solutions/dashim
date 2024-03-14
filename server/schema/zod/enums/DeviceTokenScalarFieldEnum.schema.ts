/* eslint-disable */
import { z } from 'zod';

export const DeviceTokenScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'isActive',
    'deactivationReason',
    'deactivationDate',
    'deviceName',
    'token',
    'deviceTypeId',
    'userId',
]);
