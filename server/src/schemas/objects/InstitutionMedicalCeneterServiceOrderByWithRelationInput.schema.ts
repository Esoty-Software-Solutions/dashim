import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InstitutionOrderByWithRelationInputObjectSchema } from './InstitutionOrderByWithRelationInput.schema';
import { MedicalCenterServiceOrderByWithRelationInputObjectSchema } from './MedicalCenterServiceOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceOrderByWithRelationInput> =
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
      institutionId: z.lazy(() => SortOrderSchema).optional(),
      medicalCenterServiceId: z.lazy(() => SortOrderSchema).optional(),
      basePrice: z.lazy(() => SortOrderSchema).optional(),
      institution: z
        .lazy(() => InstitutionOrderByWithRelationInputObjectSchema)
        .optional(),
      medicalCenterService: z
        .lazy(() => MedicalCenterServiceOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema =
  Schema;
