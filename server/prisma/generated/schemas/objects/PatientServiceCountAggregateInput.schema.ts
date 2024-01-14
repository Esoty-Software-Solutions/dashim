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
    name: z.literal(true).optional(),
    Note: z.literal(true).optional(),
    isWorkInjury: z.literal(true).optional(),
    isExamination: z.literal(true).optional(),
    billedAmmount: z.literal(true).optional(),
    allowedAmmount: z.literal(true).optional(),
    copayAmmount: z.literal(true).optional(),
    cashAmount: z.literal(true).optional(),
    coveredAmount: z.literal(true).optional(),
    defferedAmount: z.literal(true).optional(),
    coinsuranceAmount: z.literal(true).optional(),
    transactionReviewStatusId: z.literal(true).optional(),
    medicalReviewStatusId: z.literal(true).optional(),
    serviceId: z.literal(true).optional(),
    groupCode: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PatientServiceCountAggregateInputObjectSchema = Schema;
