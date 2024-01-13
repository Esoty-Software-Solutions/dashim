import { z } from 'zod';
import { PackageMedicalServicesUncheckedCreateNestedManyWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUncheckedCreateNestedManyWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceUncheckedCreateNestedManyWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUncheckedCreateNestedManyWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUncheckedCreateInput> = z
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
          PackageMedicalServicesUncheckedCreateNestedManyWithoutBeneftiPackageInputObjectSchema,
      )
      .optional(),
    spents: z
      .lazy(
        () =>
          SubscriberGroupBalanceUncheckedCreateNestedManyWithoutBeneftiPackageInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BenefitPackageUncheckedCreateInputObjectSchema = Schema;
