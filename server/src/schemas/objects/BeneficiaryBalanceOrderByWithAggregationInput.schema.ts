import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BeneficiaryBalanceCountOrderByAggregateInputObjectSchema } from './BeneficiaryBalanceCountOrderByAggregateInput.schema';
import { BeneficiaryBalanceAvgOrderByAggregateInputObjectSchema } from './BeneficiaryBalanceAvgOrderByAggregateInput.schema';
import { BeneficiaryBalanceMaxOrderByAggregateInputObjectSchema } from './BeneficiaryBalanceMaxOrderByAggregateInput.schema';
import { BeneficiaryBalanceMinOrderByAggregateInputObjectSchema } from './BeneficiaryBalanceMinOrderByAggregateInput.schema';
import { BeneficiaryBalanceSumOrderByAggregateInputObjectSchema } from './BeneficiaryBalanceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
      beneftiPackageId: z.lazy(() => SortOrderSchema).optional(),
      balancePending: z.lazy(() => SortOrderSchema).optional(),
      balanceActual: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => BeneficiaryBalanceCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => BeneficiaryBalanceAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => BeneficiaryBalanceMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => BeneficiaryBalanceMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => BeneficiaryBalanceSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const BeneficiaryBalanceOrderByWithAggregationInputObjectSchema = Schema;
