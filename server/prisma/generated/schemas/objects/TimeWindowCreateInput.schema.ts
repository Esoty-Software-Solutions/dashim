import { z } from 'zod';
import { MedicalCenterCreateNestedOneWithoutTimeWindowInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutTimeWindowInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    time: z.number().optional(),
    medicalCenter: z.lazy(
      () => MedicalCenterCreateNestedOneWithoutTimeWindowInputObjectSchema,
    ),
  })
  .strict();

export const TimeWindowCreateInputObjectSchema = Schema;
