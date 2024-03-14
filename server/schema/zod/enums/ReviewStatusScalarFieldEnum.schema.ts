/* eslint-disable */
import { z } from 'zod';

export const ReviewStatusScalarFieldEnumSchema = z.enum([
    'id',
    'createdAt',
    'updatedAt',
    'isPublished',
    'isSoftDeleted',
    'createdById',
    'updatedById',
    'transactionReviewStatusId',
    'medicalReviewStatusId',
]);
