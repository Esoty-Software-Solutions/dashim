import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateManyServiceInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    entryRecordId: z.string(),
    Note: z.string().optional().nullable(),
    isWorkInjury: z.boolean().optional(),
    name: z.string(),
    cash: z.number(),
    limit: z.number(),
    deffered: z.number(),
    transactionReviewStatusId: z.string(),
    medicalReviewStatusId: z.string(),
    groupId: z.string(),
  })
  .strict();

export const PatientExaminationCreateManyServiceInputObjectSchema = Schema;
