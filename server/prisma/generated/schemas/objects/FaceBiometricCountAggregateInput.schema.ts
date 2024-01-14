import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    isPublished: z.literal(true).optional(),
    isSoftDeleted: z.literal(true).optional(),
    isActive: z.literal(true).optional(),
    deactivationReason: z.literal(true).optional(),
    hash: z.literal(true).optional(),
    beneficiaryId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const FaceBiometricCountAggregateInputObjectSchema = Schema;
