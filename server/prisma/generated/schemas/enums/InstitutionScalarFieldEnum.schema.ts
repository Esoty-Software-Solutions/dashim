import { z } from 'zod';

export const InstitutionScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'name',
  'code',
  'legacyCode',
  'description',
  'cityHQ',
  'address',
  'phone',
  'email',
  'website',
  'facebookLink',
  'googleMapsLink',
  'twitterLink',
  'instagramLink',
  'latitude',
  'longitude',
  'institutionCode',
  'managingTenantId',
]);
