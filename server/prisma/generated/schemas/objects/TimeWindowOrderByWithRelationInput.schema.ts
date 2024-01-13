import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './MedicalCenterOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
    time: z.lazy(() => SortOrderSchema).optional(),
    medicalCenter: z
      .lazy(() => MedicalCenterOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const TimeWindowOrderByWithRelationInputObjectSchema = Schema;
