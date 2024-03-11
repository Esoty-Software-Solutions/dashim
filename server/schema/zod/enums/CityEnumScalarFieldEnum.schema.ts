/* eslint-disable */
import { z } from 'zod';

export const CityEnumScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'arabic',
    'english',
    'name',
    'countryId',
]);
