import { z } from 'zod';
import { InsurancePolicyCreateNestedOneWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutMedicalCentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      insurancePolicy: z.lazy(
        () =>
          InsurancePolicyCreateNestedOneWithoutMedicalCentersInputObjectSchema,
      ),
    })
    .strict();

export const InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInputObjectSchema =
  Schema;
