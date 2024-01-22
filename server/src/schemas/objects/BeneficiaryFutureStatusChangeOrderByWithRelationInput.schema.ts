import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { BeneficiaryOrderByWithRelationInputObjectSchema } from './BeneficiaryOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      createdById: z.lazy(() => SortOrderSchema).optional(),
      updatedById: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      changeDate: z.lazy(() => SortOrderSchema).optional(),
      futureStatus: z.lazy(() => SortOrderSchema).optional(),
      description: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
      CreatedBy: z
        .lazy(() => UserOrderByWithRelationInputObjectSchema)
        .optional(),
      UpdatedBy: z
        .lazy(() => UserOrderByWithRelationInputObjectSchema)
        .optional(),
      beneficiary: z
        .lazy(() => BeneficiaryOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema =
  Schema;
