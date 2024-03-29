import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCountOrderByAggregateInput> = z
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
  })
  .strict();

export const BeneficiaryBalanceCountOrderByAggregateInputObjectSchema = Schema;
