import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InsurancePolicyOrderByWithRelationInputObjectSchema } from './InsurancePolicyOrderByWithRelationInput.schema';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './MedicalCenterOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersOrderByWithRelationInput> =
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
      insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
      medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
      insurancePolicy: z
        .lazy(() => InsurancePolicyOrderByWithRelationInputObjectSchema)
        .optional(),
      medicalCenter: z
        .lazy(() => MedicalCenterOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const InsurancePolicyMedicalCentersOrderByWithRelationInputObjectSchema =
  Schema;
