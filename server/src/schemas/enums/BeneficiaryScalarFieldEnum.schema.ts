import { z } from 'zod';

export const BeneficiaryScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'firstName',
  'secondName',
  'thirdName',
  'fourthName',
  'lastName',
  'searchName',
  'birthDate',
  'genderId',
  'nationality',
  'nationalID',
  'residence',
  'address',
  'isActive',
  'deactivationReason',
  'deactivationDate',
  'statusSetById',
  'subscriberId',
  'legacyCode',
  'relationshipId',
  'isFingerprintVerificationActive',
  'isIdCardVerificationActive',
  'isFaceVerificationActive',
  'isVoiceVerificationActive',
]);
