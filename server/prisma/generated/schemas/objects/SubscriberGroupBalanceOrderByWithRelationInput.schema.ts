import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SubscriberGroupOrderByWithRelationInputObjectSchema } from './SubscriberGroupOrderByWithRelationInput.schema';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from './BenefitPackageOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      subscriberGroupId: z.lazy(() => SortOrderSchema).optional(),
      beneftiPackageId: z.lazy(() => SortOrderSchema).optional(),
      balance: z.lazy(() => SortOrderSchema).optional(),
      subscriberGroup: z
        .lazy(() => SubscriberGroupOrderByWithRelationInputObjectSchema)
        .optional(),
      beneftiPackage: z
        .lazy(() => BenefitPackageOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const SubscriberGroupBalanceOrderByWithRelationInputObjectSchema =
  Schema;
