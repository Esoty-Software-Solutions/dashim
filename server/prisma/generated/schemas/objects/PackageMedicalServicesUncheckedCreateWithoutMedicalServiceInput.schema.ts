import { z } from 'zod';
import { PatientServiceUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutServiceInput.schema';
import { PatientExaminationUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './PatientExaminationUncheckedCreateNestedManyWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInput> =
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
      insurancePolicyId: z.string(),
      price: z.number(),
      patientServices: z
        .lazy(
          () =>
            PatientServiceUncheckedCreateNestedManyWithoutServiceInputObjectSchema,
        )
        .optional(),
      patientExaminations: z
        .lazy(
          () =>
            PatientExaminationUncheckedCreateNestedManyWithoutServiceInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInputObjectSchema =
  Schema;
