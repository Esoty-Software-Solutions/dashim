import { z } from 'zod';
import { MedicalServiceCreateNestedOneWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceCreateNestedOneWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceCreateWithoutInstitutionInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      deactivationDate: z.coerce.date().optional().nullable(),
      basePrice: z.number(),
      medicalService: z.lazy(
        () =>
          MedicalServiceCreateNestedOneWithoutInstitutionPricingInputObjectSchema,
      ),
    })
    .strict();

export const InstitutionMedicalServiceCreateWithoutInstitutionInputObjectSchema =
  Schema;
