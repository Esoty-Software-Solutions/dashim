import { z } from 'zod';
import { MedicalCenterCreateNestedOneWithoutServicesInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutServicesInput.schema';
import { PatientServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './PatientServiceCreateNestedManyWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateNestedManyWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateWithoutCategoryInput> = z
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
    medicalCenter: z.lazy(
      () => MedicalCenterCreateNestedOneWithoutServicesInputObjectSchema,
    ),
    patientServices: z
      .lazy(
        () =>
          PatientServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema,
      )
      .optional(),
    institutionPricing: z
      .lazy(
        () =>
          InstitutionMedicalServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MedicalServiceCreateWithoutCategoryInputObjectSchema = Schema;
