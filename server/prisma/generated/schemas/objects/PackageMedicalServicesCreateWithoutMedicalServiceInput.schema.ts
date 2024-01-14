import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutMedicalServicesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutMedicalServicesInput.schema';
import { InsurancePolicyCreateNestedOneWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutPackageMedicalServicesInput.schema';
import { PatientServiceCreateNestedManyWithoutServiceInputObjectSchema } from './PatientServiceCreateNestedManyWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateWithoutMedicalServiceInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      price: z.number(),
      beneftiPackage: z.lazy(
        () =>
          BenefitPackageCreateNestedOneWithoutMedicalServicesInputObjectSchema,
      ),
      insurancePolicy: z.lazy(
        () =>
          InsurancePolicyCreateNestedOneWithoutPackageMedicalServicesInputObjectSchema,
      ),
      patientServices: z
        .lazy(
          () => PatientServiceCreateNestedManyWithoutServiceInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PackageMedicalServicesCreateWithoutMedicalServiceInputObjectSchema =
  Schema;
