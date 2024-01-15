import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateMinAggregateInputType> =
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      isPublished: z.literal(true).optional(),
      isSoftDeleted: z.literal(true).optional(),
      isActive: z.literal(true).optional(),
      deactivationReason: z.literal(true).optional(),
      name: z.literal(true).optional(),
      dalilCode: z.literal(true).optional(),
      basePrice: z.literal(true).optional(),
      IsPriceVaried: z.literal(true).optional(),
      description: z.literal(true).optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateMinAggregateInputObjectSchema = Schema;
