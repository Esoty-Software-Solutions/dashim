import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from './BenefitPackageOrderByWithRelationInput.schema';
import { MedicalServiceTemplateOrderByWithRelationInputObjectSchema } from './MedicalServiceTemplateOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateOrderByWithRelationInput> =
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
      deactivationDate: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      benefitPackageId: z.lazy(() => SortOrderSchema).optional(),
      medicalServiceTemplateId: z.lazy(() => SortOrderSchema).optional(),
      benefitPackage: z
        .lazy(() => BenefitPackageOrderByWithRelationInputObjectSchema)
        .optional(),
      medicalServiceTemplate: z
        .lazy(() => MedicalServiceTemplateOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema =
  Schema;
