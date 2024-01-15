import { z } from 'zod';
import { MedicalCenterServiceCreateNestedOneWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceCreateNestedOneWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceCreateWithoutInstitutionInput> =
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
      medicalCenterService: z.lazy(
        () =>
          MedicalCenterServiceCreateNestedOneWithoutInstitutionPricingInputObjectSchema,
      ),
    })
    .strict();

export const InstitutionMedicalCeneterServiceCreateWithoutInstitutionInputObjectSchema =
  Schema;
