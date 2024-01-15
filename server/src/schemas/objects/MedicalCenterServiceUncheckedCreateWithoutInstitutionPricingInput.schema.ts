import { z } from 'zod';
import { PatientServiceUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      name: z.string(),
      medicalCenterCode: z.string(),
      basePrice: z.number(),
      medicalCenterId: z.string(),
      templateId: z.string(),
      patientServices: z
        .lazy(
          () =>
            PatientServiceUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema =
  Schema;
