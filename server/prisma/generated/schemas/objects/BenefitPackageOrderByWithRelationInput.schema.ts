import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PackageMedicalServicesOrderByRelationAggregateInputObjectSchema } from './PackageMedicalServicesOrderByRelationAggregateInput.schema';
import { SubscriberGroupBalanceOrderByRelationAggregateInputObjectSchema } from './SubscriberGroupBalanceOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageOrderByWithRelationInput> = z
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
    name: z.lazy(() => SortOrderSchema).optional(),
    limit: z.lazy(() => SortOrderSchema).optional(),
    medicalServices: z
      .lazy(
        () => PackageMedicalServicesOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    spents: z
      .lazy(
        () => SubscriberGroupBalanceOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BenefitPackageOrderByWithRelationInputObjectSchema = Schema;
