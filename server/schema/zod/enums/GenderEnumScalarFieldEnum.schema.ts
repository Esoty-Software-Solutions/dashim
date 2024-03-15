/* eslint-disable */
import { z } from 'zod';

export const GenderEnumScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'arabic',
    'english',
    'name',
]);
