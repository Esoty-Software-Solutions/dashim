import { z } from 'zod';

export const PatientExaminationScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'entryRecordId',
  'Note',
  'isWorkInjury',
  'name',
  'cash',
  'limit',
  'deffered',
  'transactionReviewStatusId',
  'medicalReviewStatusId',
  'serviceId',
  'groupId',
]);
