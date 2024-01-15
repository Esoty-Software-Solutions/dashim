import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from './BenefitPackageOrderByWithRelationInput.schema';
import { MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema } from './MedicalCenterServiceTemplateOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInput> =
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
      benefitPackageId: z.lazy(() => SortOrderSchema).optional(),
      medicalCenterServiceTemplateId: z.lazy(() => SortOrderSchema).optional(),
      benefitPackage: z
        .lazy(() => BenefitPackageOrderByWithRelationInputObjectSchema)
        .optional(),
      medicalCenterServiceTemplate: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema =
  Schema;
