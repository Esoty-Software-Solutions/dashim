import { z } from 'zod';
import { PackageMedicalServicesCreateNestedManyWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesCreateNestedManyWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateWithoutSpentsInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    limit: z.number(),
    medicalServices: z
      .lazy(
        () =>
          PackageMedicalServicesCreateNestedManyWithoutBeneftiPackageInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BenefitPackageCreateWithoutSpentsInputObjectSchema = Schema;