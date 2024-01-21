import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateNestedOneWithoutMedicalCenterPricingInput.schema';
import { MedicalServiceCreateNestedOneWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceCreateNestedOneWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceCreateInput> = z
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
    institution: z.lazy(
      () =>
        InstitutionCreateNestedOneWithoutMedicalCenterPricingInputObjectSchema,
    ),
    medicalService: z.lazy(
      () =>
        MedicalServiceCreateNestedOneWithoutInstitutionPricingInputObjectSchema,
    ),
  })
  .strict();

export const InstitutionMedicalServiceCreateInputObjectSchema = Schema;
