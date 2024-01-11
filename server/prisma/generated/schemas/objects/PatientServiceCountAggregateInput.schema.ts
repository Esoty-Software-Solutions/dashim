import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    isPublished: z.literal(true).optional(),
    isSoftDeleted: z.literal(true).optional(),
    isActive: z.literal(true).optional(),
    deactivationReason: z.literal(true).optional(),
    entryRecordId: z.literal(true).optional(),
    Note: z.literal(true).optional(),
    isWorkInjury: z.literal(true).optional(),
    name: z.literal(true).optional(),
    cash: z.literal(true).optional(),
    limit: z.literal(true).optional(),
    deffered: z.literal(true).optional(),
    transactionReviewStatusId: z.literal(true).optional(),
    medicalReviewStatusId: z.literal(true).optional(),
    patientExaminationId: z.literal(true).optional(),
    serviceId: z.literal(true).optional(),
    groupId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PatientServiceCountAggregateInputObjectSchema = Schema;
