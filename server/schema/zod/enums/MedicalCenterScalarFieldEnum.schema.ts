/* eslint-disable */
import { z } from 'zod';

export const MedicalCenterScalarFieldEnumSchema = z.enum([
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
    'description',
    'phone',
    'email',
    'website',
    'facebookLink',
    'googleMapsLink',
    'twitterLink',
    'instagramLink',
    'latitude',
    'longitude',
    'managingTenantId',
]);
