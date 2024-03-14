/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCountAggregateInputType>;
export const InsurancePolicyCountAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        createdAt: z.literal(true).optional(),
        updatedAt: z.literal(true).optional(),
        isPublished: z.literal(true).optional(),
        isSoftDeleted: z.literal(true).optional(),
        isActive: z.literal(true).optional(),
        deactivationReason: z.literal(true).optional(),
        deactivationDate: z.literal(true).optional(),
        name: z.literal(true).optional(),
        Accumulatedlimit: z.literal(true).optional(),
        BalanceResetDate: z.literal(true).optional(),
        issueDate: z.literal(true).optional(),
        renewalDate: z.literal(true).optional(),
        serviceEntryTimeWindow: z.literal(true).optional(),
        institutionId: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict() as SchemaType;
