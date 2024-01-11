import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      deactivationReason: z.lazy(() => SortOrderSchema).optional(),
      beneftiPackageId: z.lazy(() => SortOrderSchema).optional(),
      medicalServiceId: z.lazy(() => SortOrderSchema).optional(),
      insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
      price: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PackageMedicalServicesCountOrderByAggregateInputObjectSchema =
  Schema;
