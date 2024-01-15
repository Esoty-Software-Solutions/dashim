import { z } from 'zod';
import { PatientServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './PatientServiceCreateNestedManyWithoutMedicalServiceInput.schema';
import { InstitutionMedicalCeneterServiceCreateNestedManyWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateNestedManyWithoutMedicalCenterServiceInput.schema';
import { MedicalCenterServiceTemplateCreateNestedOneWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateCreateNestedOneWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateWithoutMedicalCenterInput> =
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
      patientServices: z
        .lazy(
          () =>
            PatientServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema,
        )
        .optional(),
      institutionPricing: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceCreateNestedManyWithoutMedicalCenterServiceInputObjectSchema,
        )
        .optional(),
      template: z.lazy(
        () =>
          MedicalCenterServiceTemplateCreateNestedOneWithoutServicesInputObjectSchema,
      ),
    })
    .strict();

export const MedicalCenterServiceCreateWithoutMedicalCenterInputObjectSchema =
  Schema;
