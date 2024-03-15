/* eslint-disable */
import { z } from 'zod';

export const RelationshipEnumScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'arabic',
    'english',
    'name',
]);
