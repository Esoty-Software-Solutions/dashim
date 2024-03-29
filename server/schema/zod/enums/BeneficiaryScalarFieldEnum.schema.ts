/* eslint-disable */
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
    'isActive',
    'deactivationReason',
    'deactivationDate',
    'statusSetById',
    'beneficiaryEntityId',
    'legacyCode',
    'relationshipId',
]);
