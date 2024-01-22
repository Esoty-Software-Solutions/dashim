import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateManyInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    name: z.string(),
    Accumulatedlimit: z.number(),
    BalanceResetDate: z.coerce.date(),
    issueDate: z.coerce.date(),
    renewalDate: z.coerce.date(),
    serviceEntryTimeWindow: z.number().optional(),
    institutionId: z.string(),
  })
  .strict();

export const InsurancePolicyCreateManyInputObjectSchema = Schema;
