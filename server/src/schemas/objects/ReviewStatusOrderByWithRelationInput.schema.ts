import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { BeneficiaryServiceOrderByWithRelationInputObjectSchema } from './BeneficiaryServiceOrderByWithRelationInput.schema';
import { ReviewStatusEnumOrderByWithRelationInputObjectSchema } from './ReviewStatusEnumOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusOrderByWithRelationInput> = z
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
    transactionReviewStatusId: z.lazy(() => SortOrderSchema).optional(),
    medicalReviewStatusId: z.lazy(() => SortOrderSchema).optional(),
    CreatedBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    UpdatedBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    beneficiaryService: z
      .lazy(() => BeneficiaryServiceOrderByWithRelationInputObjectSchema)
      .optional(),
    transactionReviewStatus: z
      .lazy(() => ReviewStatusEnumOrderByWithRelationInputObjectSchema)
      .optional(),
    medicalReviewStatus: z
      .lazy(() => ReviewStatusEnumOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewStatusOrderByWithRelationInputObjectSchema = Schema;
