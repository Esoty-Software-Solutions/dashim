/* eslint-disable */
import { z } from 'zod';

export const InstitutionScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'isActive',
    'deactivationReason',
    'deactivationDate',
    'cityId',
    'address',
    'name',
    'code',
    'legacyCode',
    'description',
    'phoneArray',
    'emailArray',
    'website',
    'facebookLink',
    'googleMapsLink',
    'twitterLink',
    'instagramLink',
    'latitude',
    'longitude',
]);
