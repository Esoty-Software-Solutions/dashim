import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutMedicalServicesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutMedicalServicesInput.schema';
import { MedicalCenterCreateNestedOneWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutBeneftiPackagesInput.schema';
import { InsurancePolicyCreateNestedOneWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutPackageMedicalServicesInput.schema';
import { PatientExaminationCreateNestedManyWithoutServiceInputObjectSchema } from './PatientExaminationCreateNestedManyWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateWithoutPatientServicesInput> =
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
      medicalService: z.lazy(
        () =>
          MedicalCenterCreateNestedOneWithoutBeneftiPackagesInputObjectSchema,
      ),
      insurancePolicy: z.lazy(
        () =>
          InsurancePolicyCreateNestedOneWithoutPackageMedicalServicesInputObjectSchema,
      ),
      patientExaminations: z
        .lazy(
          () =>
            PatientExaminationCreateNestedManyWithoutServiceInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PackageMedicalServicesCreateWithoutPatientServicesInputObjectSchema =
  Schema;
