import { z } from 'zod';
import { InsurancePolicyCreateNestedOneWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    insurancePolicy: z.lazy(
      () =>
        InsurancePolicyCreateNestedOneWithoutBeneftiPackageInputObjectSchema,
    ),
  })
  .strict();

export const BenefitPackageCreateInputObjectSchema = Schema;