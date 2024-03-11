import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateManyMedicalCenterInput> = z
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
    medicalCenterCode: z.string(),
    basePrice: z.number(),
    categoryId: z.string(),
  })
  .strict();

export const MedicalServiceCreateManyMedicalCenterInputObjectSchema = Schema;
