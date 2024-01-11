import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from './BenefitPackageOrderByWithRelationInput.schema';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './MedicalCenterOrderByWithRelationInput.schema';
import { InsurancePolicyOrderByWithRelationInputObjectSchema } from './InsurancePolicyOrderByWithRelationInput.schema';
import { PatientServiceOrderByRelationAggregateInputObjectSchema } from './PatientServiceOrderByRelationAggregateInput.schema';
import { PatientExaminationOrderByRelationAggregateInputObjectSchema } from './PatientExaminationOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      deactivationReason: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      beneftiPackageId: z.lazy(() => SortOrderSchema).optional(),
      medicalServiceId: z.lazy(() => SortOrderSchema).optional(),
      insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
      price: z.lazy(() => SortOrderSchema).optional(),
      beneftiPackage: z
        .lazy(() => BenefitPackageOrderByWithRelationInputObjectSchema)
        .optional(),
      medicalService: z
        .lazy(() => MedicalCenterOrderByWithRelationInputObjectSchema)
        .optional(),
      insurancePolicy: z
        .lazy(() => InsurancePolicyOrderByWithRelationInputObjectSchema)
        .optional(),
      patientServices: z
        .lazy(() => PatientServiceOrderByRelationAggregateInputObjectSchema)
        .optional(),
      patientExaminations: z
        .lazy(() => PatientExaminationOrderByRelationAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const PackageMedicalServicesOrderByWithRelationInputObjectSchema =
  Schema;
