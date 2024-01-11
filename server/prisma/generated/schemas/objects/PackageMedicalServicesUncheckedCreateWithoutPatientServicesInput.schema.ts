import { z } from 'zod';
import { PatientExaminationUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './PatientExaminationUncheckedCreateNestedManyWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUncheckedCreateWithoutPatientServicesInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      beneftiPackageId: z.string(),
      medicalServiceId: z.string(),
      insurancePolicyId: z.string(),
      price: z.number(),
      patientExaminations: z
        .lazy(
          () =>
            PatientExaminationUncheckedCreateNestedManyWithoutServiceInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PackageMedicalServicesUncheckedCreateWithoutPatientServicesInputObjectSchema =
  Schema;
