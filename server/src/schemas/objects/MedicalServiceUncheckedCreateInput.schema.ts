import { z } from 'zod';
import { PatientServiceUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateNestedManyWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUncheckedCreateInput> = z
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
    medicalCenterCode: z.string(),
    basePrice: z.number(),
    medicalCenterId: z.string(),
    categoryId: z.string(),
    patientServices: z
      .lazy(
        () =>
          PatientServiceUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema,
      )
      .optional(),
    institutionPricing: z
      .lazy(
        () =>
          InstitutionMedicalServiceUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MedicalServiceUncheckedCreateInputObjectSchema = Schema;
