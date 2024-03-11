import { z } from 'zod';
import { BenefitPackageCreatecopayDistrubtionInputObjectSchema } from './BenefitPackageCreatecopayDistrubtionInput.schema';
import { BenefitPackageCreatethreasholdInputObjectSchema } from './BenefitPackageCreatethreasholdInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateManyInput> = z
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
    copayDistrubtion: z
      .union([
        z.lazy(() => BenefitPackageCreatecopayDistrubtionInputObjectSchema),
        z.number().array(),
      ])
      .optional(),
    threashold: z
      .union([
        z.lazy(() => BenefitPackageCreatethreasholdInputObjectSchema),
        z.number().array(),
      ])
      .optional(),
    insurancePolicyId: z.string(),
  })
  .strict();

export const BenefitPackageCreateManyInputObjectSchema = Schema;
