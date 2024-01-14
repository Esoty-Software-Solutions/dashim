import { z } from 'zod';
import { PatientServiceUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUncheckedCreateInput> = z
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
    patientServices: z
      .lazy(
        () =>
          PatientServiceUncheckedCreateNestedManyWithoutServiceInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PackageMedicalServicesUncheckedCreateInputObjectSchema = Schema;
