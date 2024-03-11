/* eslint-disable */
import { z } from 'zod';

export const DeviceTypeEnumScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'arabic',
    'english',
    'name',
]);
