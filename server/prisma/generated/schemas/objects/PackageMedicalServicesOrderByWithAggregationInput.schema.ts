import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PackageMedicalServicesCountOrderByAggregateInputObjectSchema } from './PackageMedicalServicesCountOrderByAggregateInput.schema';
import { PackageMedicalServicesAvgOrderByAggregateInputObjectSchema } from './PackageMedicalServicesAvgOrderByAggregateInput.schema';
import { PackageMedicalServicesMaxOrderByAggregateInputObjectSchema } from './PackageMedicalServicesMaxOrderByAggregateInput.schema';
import { PackageMedicalServicesMinOrderByAggregateInputObjectSchema } from './PackageMedicalServicesMinOrderByAggregateInput.schema';
import { PackageMedicalServicesSumOrderByAggregateInputObjectSchema } from './PackageMedicalServicesSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesOrderByWithAggregationInput> =
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
      _count: z
        .lazy(
          () => PackageMedicalServicesCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _avg: z
        .lazy(() => PackageMedicalServicesAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => PackageMedicalServicesMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => PackageMedicalServicesMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => PackageMedicalServicesSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const PackageMedicalServicesOrderByWithAggregationInputObjectSchema =
  Schema;
