import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateNestedOneWithoutMedicalCenterPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      basePrice: z.number(),
      institution: z.lazy(
        () =>
          InstitutionCreateNestedOneWithoutMedicalCenterPricingInputObjectSchema,
      ),
    })
    .strict();

export const InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInputObjectSchema =
  Schema;
