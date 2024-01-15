import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateMinAggregateInputType> =
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      isPublished: z.literal(true).optional(),
      isSoftDeleted: z.literal(true).optional(),
      isActive: z.literal(true).optional(),
      deactivationReason: z.literal(true).optional(),
      benefitPackageId: z.literal(true).optional(),
      medicalCenterServiceTemplateId: z.literal(true).optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateMinAggregateInputObjectSchema =
  Schema;
